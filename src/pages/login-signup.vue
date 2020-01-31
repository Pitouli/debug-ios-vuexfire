<template>
  <f7-page name="login-signup" login-screen>
    <f7-navbar v-if="$f7route.query.showNavbar">
      <f7-nav-left>
        <f7-nav-left back-link="Back" />
      </f7-nav-left>
    </f7-navbar>
    <f7-login-screen-title>Login to Kipinto</f7-login-screen-title>
    <f7-list form>
      <f7-list-input
        type="email"
        autocomplete="email"
        placeholder="Your e-mail"
        clear-button
        :value="email"
        @input="email = $event.target.value"
      />
      <f7-list-input
        type="password"
        autocomplete="current-password"
        placeholder="Your password"
        clear-button
        :value="password"
        @input="password = $event.target.value"
      />
      <f7-list-item-row>
        <f7-list-item-cell>
          <f7-button large @click="login">
            Login
          </f7-button>
        </f7-list-item-cell>
        <f7-list-item-cell>
          <f7-button large @click="signup">
            Sign-up
          </f7-button>
        </f7-list-item-cell>
      </f7-list-item-row>
    </f7-list>
    <hr>
    <f7-block>
      <f7-button
        fill
        block
        raised
        large
        color="red"
        @click="googleLogin"
      >
        Google
      </f7-button>
    </f7-block>
    <hr>
  </f7-page>
</template>

<script>
import firebase from '../js/db'; // REDUCE SIZE

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signup () {
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    },
    googleLogin () {
      this.$store.dispatch('signUserInGoogle')
    },
    login () {
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    }
  },
};
</script>
