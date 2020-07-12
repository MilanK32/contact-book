<template>
  <div id="contact-list" class="w-100 m-3">
    <div class="container">
      <table class="table table-hover table-borderless">
        <thead class="border-bottom">
          <tr class="d-flex">
            <th scope="col" class="col-3">Name</th>
            <th scope="col" class="col-2">Email</th>
            <th scope="col" class="col-3">Phone Number</th>
            <th scope="col" class="col-2">Adress</th>
            <th scope="col" class="col-2">Company</th>
          </tr>
        </thead>
        <tbody>
          <tr class="d-flex">
            <td class="user col-3">{{ contacts.fname }} {{ contacts.lname }}</td>
            <td class="col-3">{{ contacts.email }}</td>
            <td class="col-2">{{ contacts.adress }}</td>
            <td class="col-2">{{ contacts.phone }}</td>
            <td class="col-2">{{ contacts.company }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <modal></modal>
  </div>
</template>

<script>
import modal from './AddContactModal.vue'

  export default {
    data() {
      return {
        contacts: {
          name: ''
        }
      }
    },
    components: {
      modal
    },
    methods: {

    }
  }
</script>

<style lang="">
  ul {
    list-style-type: none;
  }

  table img {
    height: 30px;
    width: 30px;
  }

  table tbody tr {
    cursor: pointer;
  }
</style>