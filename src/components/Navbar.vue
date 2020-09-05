<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg border-bottom"
      :class="(mode === 'dark') ? 'navbar-dark bg-dark d-border' : 'navbar-light bg-light'">
      <div class="toggle-btn ml-3">
        <button type="button" class="close" @click="closeSidebar" aria-label="Close">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="nav-head ml-2">
        <a class="navbar-brand" href="#">Contact Book</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse col-lg-9 mx-auto" id="navbarSupportedContent">
        <form class="form-inline col-md-12 my-2 my-lg-0 justify-content-center">
          <input :class="(mode === 'dark') ? 'bg-dark text-light search-box' : 'bg-light'"
            class="form-control shadow-none col-md-6 mr-sm-2" type="search" placeholder="Search"
            @input="$emit('searchInput', $event.target.value)">
        </form>
      </div>
      <div class="switch-theme-btns text-right">
        <img @click="darkTheme" class="switch-theme-dark" src="/src/img/dark.svg" alt="">
        <img @click="lightTheme" class="switch-theme-light inactive" src="/src/img/light.svg" alt="">
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    props: {
      mode: String
    },
    methods: {
      closeSidebar() {
        this.$emit('slide-left');
        document.querySelector('.close').classList.toggle('rotate');
      },
      darkTheme() {
        this.$emit('darkTheme', this.mode);
        document.querySelector('.switch-theme-dark').classList.add('inactive');
        document.querySelector('.switch-theme-light').classList.remove('inactive');
      },
      lightTheme() {
        this.$emit('lightTheme', this.mode);
        document.querySelector('.switch-theme-light').classList.add('inactive');
        document.querySelector('.switch-theme-dark').classList.remove('inactive');
      }
    }
  }
</script>

<style lang="scss">
  .close {
    transition: ease 0.2s;
    outline: none !important;
  }

  .rotate {
    transform: rotate(90deg);
  }

  .switch-theme-btns img:hover {
    cursor: pointer;
  }

  .switch-theme-btns img {
    height: 35px;
    widows: 35px;
    color: white;
  }

  .inactive {
    display: none;
  }

  .d-border {
    border-color: rgb(75, 73, 73) !important;
  }

  .search-box::-webkit-input-placeholder {
    color: #ddd;
  }

  @media (max-width: 992px) {
    .toggle-btn {
      display: none;
    }
    .navbar {
      justify-content: center;
    }
  }
</style>
