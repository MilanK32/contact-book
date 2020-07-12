<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div class="toggle-btn ml-3">
        <button type="button" class="close" @click="closeSidebar" aria-label="Close">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="nav-head mx-auto">
        <a class="navbar-brand" href="#">Contact Book</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse col-lg-10 mx-auto" id="navbarSupportedContent">
        <form class="form-inline col-md-12 my-2 my-lg-0 justify-content-center">
          <input class="form-control shadow-none col-md-6 mr-sm-2" type="search" placeholder="Search"
            aria-label="Search">
          <button class="btn btn-outline-secondary shadow-none my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div class="d-flex">
      <transition name="ease">
        <sidebar v-show="clickToggle"></sidebar>
      </transition>
      <contact-list></contact-list>
    </div>
  </div>
</template>

<script>
  import sidebar from './Sidebar.vue'
  import contactList from './ContactList.vue'

  export default {
    data() {
      return {
        clickToggle: true
      }
    },
    methods: {
      closeSidebar() {
        this.$emit('slide-left');
        this.clickToggle = !this.clickToggle;
        document.querySelector('.close').classList.toggle('rotate');
      },
    },
    components: {
      sidebar,
      contactList
    }
  }
</script>

<style lang="">
  .close {
    transition: ease 0.2s;
    outline: none !important;
  }

  .rotate {
    transform: rotate(90deg);
  }

  .ease-enter-active {
    animation: easea .3s;
  }

  .ease-leave-active {
    animation: easea .3s reverse;
  }

  @keyframes easea {
    0% {
      margin-left: -16rem;
    }

    10% {
      margin-left: -14.4rem;
    }

    20% {
      margin-left: -12.8rem;
    }

    30% {
      margin-left: -11.2rem;
    }

    40% {
      margin-left: -9.6rem;
    }

    50% {
      margin-left: -8rem;
    }

    60% {
      margin-left: -6.4rem;
    }

    70% {
      margin-left: -4.8rem;
    }

    80% {
      margin-left: -3.2rem;
    }

    90% {
      margin-left: -1.6rem;
    }

    100% {
      margin-left: 0;
    }
  }
</style>