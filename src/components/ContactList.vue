<template>
  <div id="contact-list" :class="(mode === 'light') ? 'bg-white' : 'bg-dark'" class="w-100 px-4">
    <div :class="(mode === 'light') ? 'text-muted' : 'text-light d-border'"
      class="contact-list-header d-flex border-bottom font-weight-bold ">
      <div class="col-md-3 py-4">Name</div>
      <div class="email col-4 py-4">Email</div>
      <div class="phone col-md-3 py-4">Phone Number</div>
    </div>
    <div :class="(mode === 'light') ? 'contacts-number' : 'contacts-number-dark'" class="col-md mt-3 py-2">
      Contacts ({{ contacts.length }})
    </div>
    <div class="contact-list-container" v-for="(person, index) in contacts" :key="index">
      <contact-item :mode="mode" :contact="person" @save="save" @remove="remove"></contact-item>
    </div>
  </div>
</template>

<script>
  import addContactModal from './AddContactModal.vue'
  import contactItem from './ContactItem.vue'

  export default {
    props: {
      contacts: Array,
      mode: String
    },
    methods: {
      save(data) {
        this.$emit('save', data);
      },
      remove(id) {
        this.$emit("remove", id);
      },
    },
    components: {
      addContactModal,
      contactItem
    }
  }
</script>

<style lang="scss">
  .contacts-number {
    font-size: 13px;
    font-weight: 400;
    color: rgb(114, 112, 112);
    text-transform: uppercase;
  }

  .contacts-number-dark {
    font-size: 13px;
    font-weight: 400;
    color: rgb(187, 183, 183);
    text-transform: uppercase;
  }

  .d-border {
    border-color: rgb(75, 73, 73) !important;
  }

  @media (max-width: 768px) {
    #contact-list .email {
      display: none;
    }
  }

  @media (max-width: 600px) {
    #contact-list .phone {
      display: none;
    }
  }
</style>
