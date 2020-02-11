<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar :sliding="false" large>
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>DebugIOs</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-nav-title-large sliding>DebugIOs</f7-nav-title-large>
    </f7-navbar>

    <!-- Page content-->
    <f7-block strong>
      <p>This is an example of tabs-layout application. The main point of such tabbed layout is that each tab contains independent view with its own routing and navigation.</p>

      <p>Each tab/view may have different layout, different navbar type (dynamic, fixed or static) or without navbar like this tab.</p>
    </f7-block>

    <f7-block-title>Debug firestore - Messages no auth</f7-block-title>
    <f7-list>
      <f7-list-button @click="addMessage">Add Message</f7-list-button>
      <f7-list-item v-for="message in messages" :key="message.id">
        {{ new Date(message.date.seconds*1000).toUTCString() }} | {{ message.date.nanoseconds }}
      </f7-list-item>
    </f7-list>

    <f7-block-title>Debug firestore - Messages with auth</f7-block-title>
    <f7-list>
      <f7-list-button @click="addUserMessage">Add User Message</f7-list-button>
      <f7-list-item v-for="userMessage in userMessages" :key="userMessage.id">
        {{ new Date(userMessage.date.seconds*1000).toUTCString() }} | {{ userMessage.date.nanoseconds }}
      </f7-list-item>
    </f7-list>



    <f7-block-title>Navigation</f7-block-title>
    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/form/" title="Form"></f7-list-item>
    </f7-list>

    <f7-block-title>Modals</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised popup-open="#my-popup">Popup</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised login-screen-open="#my-login-screen">Login Screen</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Panels</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised panel-open="left">Left Panel</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised panel-open="right">Right Panel</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-list>
      <f7-list-item
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      ></f7-list-item>
      <f7-list-item
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      ></f7-list-item>
      <f7-list-item
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      ></f7-list-item>
    </f7-list>

  </f7-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters(["messages", "userMessages"])
  },
  mounted() {
    this.$store.dispatch("bindMessages")
  },
  methods: {
    addMessage() {
      this.$store.dispatch("addMessage", { value: "Coucou" } )
    },
    addUserMessage() {
      this.$store.dispatch("addUserMessage", { value: "Coucou User" } )
    }
  }
}
</script>
