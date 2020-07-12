<template>
  <div id="modal">
    <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalScrollableTitle">Add a Contact</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addContact">
              <div class="form-group">
                <label for="exampleInputName1">First Name</label>
                <input type="text" v-model="contacts.fname" class="form-control" id="exampleInputName1"
                  placeholder="Enter First Name" required>
              </div>
              <div class="form-group">
                <label for="exampleInputLastName1">Last Name</label>
                <input type="text" v-model="contacts.lname" class="form-control" id="exampleInputLastName1" 
                placeholder="Enter Last Name"
                  required>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email Address</label>
                <input type="email" v-model="contacts.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder="Enter email" required>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                  else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputAdress1">Adress</label>
                <input type="text" v-model="contacts.adress" class="form-control" id="exampleInputAdress1" placeholder="Enter Adress" required>
              </div>
              <div class="form-group">
                <label for="exampleInputPhone1">Phone Number</label>
                <input type="number" v-model="contacts.phone" class="form-control" id="exampleInputPhone1" placeholder="Enter Phone Number"
                  required>
              </div>
              <div class="form-group">
                <label for="exampleInputCompany1">Company</label>
                <input type="text" v-model="contacts.company" class="form-control" id="exampleInputCompany1" placeholder="Enter Company" required>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-success" @submit="addContact">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        contacts: [{
          fname: '',
          lname: '',
          email: '',
          adress: '',
          phone: '',
          company: ''
        }]
      }
    },
    methods: {
      addContact() {
        this.$emit('passArr', this.contacts);
      }
    },
  }
</script>

<style lang="">

</style>