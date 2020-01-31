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
    })
  },

  getters: {
    messages: (state) => {
      return state.messages
    }
  }
})