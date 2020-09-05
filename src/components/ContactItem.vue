<template>
  <div class="contact-item">
    <edit-contact v-if="isEditing" :mode="mode" @save="save" @close="hideModal" :contact="contact"></edit-contact>
    <contact-info v-if="infoClicked" :mode="mode" @close="closeInfo" :contact="contact"></contact-info>
    <div :class="(mode === 'light') ? 'contact-list-item-light' : 'contact-list-item-dark text-light'" 
    class="contact-list-item-light d-flex" @click="openInfo">
      <div class="col-md-3 py-4">{{ fullName() }}</div>
      <div class="email col-md-4 py-4">
        <a :href="'mailto:' + contact.email" @click.stop="">{{ contact.email }}
        </a>
      </div>
      <div class="phone col-md-3 py-4">{{ contact.phone }}</div>
      <div class="action-btns col-md-2 align-self-center p-0">
        <button class="edit-btn btn btn-outline-secondary" @click.stop="" @click="openEditContact">
          <i class="fa fa-edit"></i>
        </button>
        <button class="delete-btn btn btn-danger" @click.stop="" @click="removeContact">
          <i class="fa fa-trash"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
  import editContact from './EditContact.vue'
  import contactInfo from './ContactInfo.vue'

  export default {
    props: {
      contact: Object,
      mode: String
    },
    data() {
      return {
        isEditing: false,
        infoClicked: false,
        hovering: false
      }
    },
    methods: {
      fullName() {
        return this.contact.firstName + ' ' + this.contact.lastName;
      },
      hideModal() {
        this.isEditing = false;
      },
      save(data) {
        this.$emit('save', data);
      },
      openEditContact() {
        this.isEditing = true;
      },
      removeContact() {
        this.$emit('remove', this.contact.id, this.contact)
      },
      openInfo() {
        this.infoClicked = true;
      },
      closeInfo() {
        this.infoClicked = false;
      }
    },
    components: {
      editContact,
      contactInfo
    }
  }
</script>

<style lang="scss">
  .contact-list-item-light:hover {
    background: #dae0e5;
    cursor: pointer;
  }

  .contact-list-item-dark:hover {
    background: #1d2124;
  }

  .contact-list-item-light:hover .action-btns {
    display: block;
  }

  .delete-btn {
    margin: 0 5px;
  }

  .edit-btn i,
  .delete-btn i {
    height: 20px;
    width: 20px;
  }

  .action-btns {
    display: none;
  }

  @media (max-width: 768px) {
    .contact-item .email {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .contact-item .phone {
      display: none;
    }
  }
</style>
