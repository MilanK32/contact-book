<template>
  <div id="sidebar">
    <div class="d-flex" id="wrapper">
      <div :class="darkMode" class="border-right" id="sidebar-wrapper">
        <div class="list-group list-group-flush">
          <a href="#" :class="darkMode" @click="$emit('all-contacts')"
            class="list-group-item list-group-item-action py-4">
            <i class="fa fa-id-card"></i><span class="item-desc">All Contacts</span></a>
          <a href="#" :class="darkMode" @click="showModalBtn" class="list-group-item list-group-item-action py-4">
            <i class="fa fa-user-plus"></i><span class="item-desc">Add Contact</span></a>
          <a href="#" :class="darkMode" @click="toggleLabels" class="list-group-item list-group-item-action py-4">
            <i class="fa fa-users"></i><span class="item-desc">Labels</span>
            <i class="arrow-down fa fa-caret-down"></i></a>
          <a href="#" :class="darkMode" v-if="labelClicked" @click="$emit('distributor')"
            class="list-group-item list-group-item-action text-center py-2">
            <span class="item-desc">Distributer</span></a>
          <a href="#" :class="darkMode" v-if="labelClicked" @click="$emit('electronics')"
            class="list-group-item list-group-item-action text-center py-2">
            <span class="item-desc">Elektronika</span></a>
          <a href="#" :class="darkMode" v-if="labelClicked" @click="$emit('programming')"
            class="list-group-item list-group-item-action text-center py-2">
            <span class="item-desc">Programiranje</span></a>
          <a href="#" :class="darkMode" @click="$emit('trash')" class="list-group-item list-group-item-action py-4">
            <i class="fa fa-trash"></i><span class="item-desc">Trash</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      mode: String
    },
    data() {
      return {
        labelClicked: false
      }
    },
    methods: {
      showModalBtn() {
        this.$emit('open-modal');
      },
      toggleLabels() {
        if (!this.labelClicked) {
          this.labelClicked = true;
          document.querySelector('.arrow-down').style.transform = 'rotate(180deg)'
        } else {
          this.labelClicked = false;
          document.querySelector('.arrow-down').style.transform = 'rotate(0deg)'
        }
      },
    },
    computed: {
      darkMode() {
        if (this.mode === 'dark') {
          return 'bg-dark text-light d-border'
        } else {
          return 'bg-light'
        }
      }
    }
  }
</script>

<style lang="scss">
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

  #sidebar-wrapper .list-group .list-group-item i {
    padding: 0 10px;
  }

  #page-content-wrapper {
    min-width: 100vw;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: 0;
  }

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

  .list-group .arrow-down {
    font-size: 16px;
  }

  .d-border {
    border-color: rgb(75, 73, 73) !important;
  }

   @media (max-width: 992px) {
    #sidebar {
      margin-left: -16rem;
    }
  }

  // @media (max-width: 992px) {
  //   #sidebar-wrapper .list-group {
  //     width: auto;
  //   }

  //   #sidebar-wrapper .item-desc {
  //     display: none;
  //   }
  // }
</style>
