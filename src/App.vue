<template>
  <div id="app">
    <navbar></navbar>
    <!-- <div class="d-flex">
      <transition name="ease">
        <sidebar class="slide" v-show="clickToggle" @slide-left="toggleSidebar"></sidebar>
      </transition>
      </div> -->
      <!-- <contact-list></contact-list> -->
    <modal></modal>
  </div>
</template>

<script>
  import sidebar from './components/Sidebar.vue'
  import navbar from './components/Navbar.vue'
  import contactList from './components/ContactList.vue'
  import modal from './components/AddContactModal.vue'

  export default {
    name: 'app',
    data() {
      return {
        
      }
    },
    methods: {
    },
    components: {
      sidebar,
      navbar,
      contactList,
      modal
    }
  }
</script>

<style lang="">
  
</style>