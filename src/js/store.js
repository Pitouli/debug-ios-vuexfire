import Vue from 'vue';
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { firestore } from './db'

import user from './store-user'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: user
  },

  state: {
    messages: [],
    userMessages: []
  },

  mutations: {
    ...vuexfireMutations,
  },

  actions: {
    bindMessages: firestoreAction(({ state, bindFirestoreRef }) => {
      console.log("Binding Messages")
      return bindFirestoreRef('messages', firestore.collection('messages').orderBy('date', 'desc').limit(20))
    }),

    addMessage: firestoreAction(context => {
      return firestore.collection('messages').add({
        date: new Date()
      })
    }),

    bindUserMessages: firestoreAction(({ state, bindFirestoreRef }) => {
      console.log("Binding User Messages")
      if (state.user.user && state.user.user.id) {
        return bindFirestoreRef('userMessages', firestore.collection('users/'+state.user.user.id+'/messages').orderBy('date', 'desc').limit(20))
      }
    }),

    addUserMessage: firestoreAction(context => {
      console.log("context", context);
      if (context.state.user.user && context.state.user.user.id) {
        return firestore.collection('users/'+context.state.user.user.id+'/messages').add({
          date: new Date()
        })
      }
    })
  },

  getters: {
    messages: (state) => {
      return state.messages
    },
    userMessages: (state) => {
      return state.userMessages
    }
  }
})