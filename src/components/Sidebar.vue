<template>
  <div id="sidebar">
    <div class="d-flex" id="wrapper">
      <!-- Sidebar -->
      <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="list-group list-group-flush">
          <a href="#" class="list-group-item list-group-item-action bg-light">
            <i class="fa fa-id-card"></i><span class="item-desc">All Contacts</span></a>
          <a href="#" class="list-group-item list-group-item-action bg-light" data-toggle="modal" data-target="#exampleModalScrollable">
            <i class="fa fa-user-plus"></i><span class="item-desc">Add Contact</span></a>
          <a href="#" class="list-group-item list-group-item-action bg-light">
            <i class="fa fa-users"></i><span class="item-desc">Groups</span></a>
          <a href="#" class="list-group-item list-group-item-action bg-light">
            <i class="fa fa-share-alt"></i><span class="item-desc">Share Contacts</span></a>
          <a href="#" class="list-group-item list-group-item-action bg-light">
            <i class="fa fa-trash"></i><span class="item-desc">Trash</span></a>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import contactList from './ContactList.vue'
import modal from './AddContactModal.vue'

  export default {
    methods: {

    },
    components: {
      contactList, modal
    }
  }
</script>

<style lang="">
  #sidebar {
    -webkit-transition: margin .25s ease-out;
    -moz-transition: margin .25s ease-out;
    -o-transition: margin .25s ease-out;
    transition: margin .25s ease-out;
  }

  #wrapper {
    overflow-x: hidden;
  }
  
  #sidebar-wrapper {
    min-height: calc(100vh - 57px);
    -webkit-transition: margin .25s ease-out;
    -moz-transition: margin .25s ease-out;
    -o-transition: margin .25s ease-out;
    transition: margin .25s ease-out;
  }

  #sidebar-wrapper .sidebar-heading {
    padding: 0.875rem 1.25rem;
    font-size: 1.2rem;
  }

  #sidebar-wrapper .sidebar-heading i {
    transform: rotate(90deg);
  }

  #sidebar-wrapper .list-group {
    width: 16rem;
  }

  #sidebar-wrapper .list-group .list-group-item {
    padding: 20px 30px;
  }

  #sidebar-wrapper .list-group .list-group-item i {
    width: 40px;
    padding: 0 10px;
  }

  #page-content-wrapper {
    min-width: 100vw;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: 0;
  }

  /* .sidebar-toggle {
    position: absolute;
    display: none;
    padding: 5px;
    font-weight: 700;
    opacity: .5;
    width: 100px;
    height: 50px;
    background: transparent;
    font-size: 1.5rem;
    top: 0;
    left: 0;
    border: none;
    clip-path: polygon(5% 0, 20% 50%, 5% 99%, 0 100%, 0 50%, 0 0);
  }

  .sidebar-toggle:hover {
    color: #000;
    opacity: 1;
    text-decoration: none;
  }

  .sidebar-toggle i {
    padding: 0;
  } */

  @media (min-width: 768px) {
    #sidebar-wrapper {
      margin-left: 0;
    }

    #page-content-wrapper {
      min-width: 0;
      width: 100%;
    }

    #wrapper.toggled #sidebar-wrapper {
      margin-left: -15rem;
    }
  }
</style>