<template>
  <div id="app">
    <navbar :mode="mode" @slide-left="hideSidebar" @searchInput="filterContacts" @darkTheme="changeDark"
      @lightTheme="changeLight"></navbar>
    <div class="d-flex">
      <transition name="sidebar">
        <sidebar v-if="clickToggle" @open-modal="openModal" @distributor="filterDistributors"
          @electronics="filterElectronics" @programming="filterProgramming" @allContacts="showAll" :mode="mode">
        </sidebar>
      </transition>
      <contact-list :mode="mode" :contacts="activeContacts" @save="save" @remove="remove">
      </contact-list>
    </div>
    <add-contact-modal v-if="showModal" :mode="mode" @passArr="contactAdded" @close="hideModal">
    </add-contact-modal>
  </div>
</template>

<script>
  import sidebar from './components/Sidebar.vue'
  import navbar from './components/Navbar.vue'
  import contactList from './components/ContactList.vue'
  import addContactModal from './components/AddContactModal.vue'

  let nextId = 2;

  export default {
    name: 'app',
    data() {
      return {
        mode: 'light',
        showModal: false,
        clickToggle: true,
        searchText: '',
        showDistributors: false,
        showElectronics: false,
        showProgramming: false,
        contacts: [{
            id: 0,
            firstName: 'Milan',
            lastName: 'Kozlovacki',
            email: 'kozlovacki.milan@gmail.com',
            adress: 'Kociceva 42',
            company: 'Nanobile',
            phone: '0611507850',
            labels: [
              'elektronika',
              'distributer'
            ]
          },
          {
            id: 1,
            firstName: 'Dragan',
            lastName: 'Ilic',
            email: 'kozlovacki2.milan@gmail.com',
            adress: 'Kociceva 422',
            company: 'Nanobile1',
            phone: '3810611507850',
            labels: [
              'programiranje'
            ]
          }
        ]
      }
    },
    methods: {
      changeDark() {
        this.mode = 'dark';
      },
      changeLight() {
        this.mode = 'light';
      },
      hideSidebar() {
        this.clickToggle = !this.clickToggle;
      },
      contactAdded(data) {
        this.contacts.push({
          id: nextId++,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          adress: data.adress,
          company: data.company,
          phone: data.phone,
          labels: data.labels
        });
      },
      openModal() {
        this.showModal = true;
      },
      hideModal() {
        this.showModal = false;
      },
      save(data) {
        const index = this.contacts.findIndex(el => el.id === data.id);
        const update = {
          ...data
        };
        this.contacts.splice(index, 1, update);
      },
      remove(id) {
        const itemId = this.contacts.findIndex(el => el.id === id);
        this.contacts.splice(itemId, 1);
      },
      filterContacts(data) {
        this.searchText = data;
      },
      filterDistributors() {
        this.showDistributors = true;
        this.showElectronics = false;
        this.showProgramming = false;
      },
      filterElectronics() {
        this.showElectronics = true;
        this.showDistributors = false;
        this.showProgramming = false;
      },
      filterProgramming() {
        this.showProgramming = true;
        this.showDistributors = false;
        this.showElectronics = false;
      },
      showAll() {
        this.showDistributors = false;
        this.showElectronics = false;
        this.showProgramming = false;
      }
    },
    computed: {
      activeContacts() {
        const text = this.searchText.toLowerCase();

        if (text) {
          return this.contacts.filter(el => {
            const name = (el.firstName + " " + el.lastName).toLowerCase();
            if (name.includes(text)) return true;
            if (el.email.toLowerCase().includes(text)) return true;
            if (el.phone.toLowerCase().includes(text)) return true;
            if (el.company.toLowerCase().includes(text)) return true;
          });
        }

        if (this.showDistributors === true) {
          return this.contacts.filter(el => {
            if (el.labels.includes('distributer')) return true;
          })
        }

        if (this.showElectronics === true) {
          return this.contacts.filter(el => {
            if (el.labels.includes('elektronika')) return true;
          })
        }

        if (this.showProgramming === true) {
          return this.contacts.filter(el => {
            if (el.labels.includes('programiranje')) return true;
          })
        }

        return this.contacts;
      }

    },
    components: {
      sidebar,
      navbar,
      contactList,
      addContactModal
    }
  }
</script>

<style lang="scss">
  .sidebar-enter-active {
    animation: sidebarSlide .3s;
  }

  .sidebar-leave-active {
    animation: sidebarSlide .3s reverse;
  }

  @keyframes sidebarSlide {
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