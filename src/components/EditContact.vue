<template>
  <transition appear name="modal">
    <div class="edit-contact modal-mask">
      <div class="modal-wrapper" @click="$emit('close')">
        <div :class="(mode === 'light' ? 'bg-light' : 'bg-dark text-light')"
        class="container modal-container" @click.stop="">
          <div class="modal-header">
            <slot name="header">
              <h5 class="modal-title" id="exampleModalScrollableTitle">Edit Contact</h5>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <form @submit.prevent="save">
                <div class="form-row">
                  <div class="form-group col-lg-1 d-flex">
                    <div class="justify-content-center align-self-center">
                      <img class="user-icon" src="/src/img/user.svg" alt="">
                    </div>
                  </div>
                  <div class="form-group col-md-5 ml-2">
                    <label>First Name</label>
                    <input type="text" v-model.trim="$v.copy.firstName.$model"
                      :class="{'is-invalid': $v.copy.firstName.$error, 'is-valid': !$v.copy.firstName.$invalid}"
                      class="form-control shadow-none" placeholder="Enter First Name">
                    <div class="invalid-feedback">
                      <span v-if="!$v.copy.firstName.required">First Name required</span>
                    </div>
                  </div>
                  <div class="form-group col-md-5">
                    <label>Last Name</label>
                    <input type="text" v-model.trim="$v.copy.lastName.$model"
                      :class="{'is-invalid': $v.copy.lastName.$error, 'is-valid': !$v.copy.lastName.$invalid}"
                      class="form-control shadow-none" placeholder="Enter First Name">
                    <div class="invalid-feedback">
                      <span v-if="!$v.copy.lastName.required">Last Name required</span>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-lg-1 d-flex">
                    <div class="justify-content-center align-self-center pt-1">
                      <img class="user-icon" src="/src/img/mail.svg" alt="">
                    </div>
                  </div>
                  <div class="form-group col-md-10 mx-2">
                    <label>Email Address</label>
                    <input type="email" v-model.trim="$v.copy.email.$model"
                      :class="{'is-invalid': $v.copy.email.$error, 'is-valid': !$v.copy.email.$invalid}"
                      class="form-control shadow-none" aria-describedby="emailHelp" placeholder="Enter email">
                    <div class="invalid-feedback">
                      <span v-if="!$v.copy.email.required">Email required</span>
                      <span v-if="!$v.copy.email.checkEmail">Enter valid email</span>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-lg-1 d-flex">
                    <div class="justify-content-center align-self-center">
                      <img class="user-icon" src="/src/img/company.svg" alt="">
                    </div>
                  </div>
                  <div class="form-group col-md-5 ml-2">
                    <label>Adress</label>
                    <input type="text" v-model.trim="$v.copy.adress.$model"
                      :class="{'is-invalid': $v.copy.adress.$error, 'is-valid': !$v.copy.adress.$invalid}"
                      class="form-control shadow-none" placeholder="Enter Adress">
                    <div class="invalid-feedback">
                      <span v-if="!$v.copy.adress.required">Adress required</span>
                    </div>
                  </div>
                  <div class="form-group col-md-5">
                    <label>Company</label>
                    <input type="text" v-model.trim="$v.copy.company.$model"
                      :class="{'is-invalid': $v.copy.company.$error, 'is-valid': !$v.copy.company.$invalid}"
                      class="form-control shadow-none" placeholder="Enter Company">
                    <div class="invalid-feedback">
                      <span v-if="!$v.copy.company.required">Company required</span>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-lg-1 d-flex">
                    <div class="justify-content-center align-self-center pt-1">
                      <img class="user-icon" src="/src/img/phone.svg" alt="">
                    </div>
                  </div>
                  <div class="form-group col-md-10 ml-2">
                    <label>Phone Number</label>
                    <input type="number" v-model.trim="$v.copy.phone.$model"
                      :class="{'is-invalid': $v.copy.phone.$error, 'is-valid': !$v.copy.phone.$invalid}"
                      class="form-control shadow-none" placeholder="Enter Phone Number">
                    <div class="invalid-feedback">
                      <span v-if="!$v.copy.phone.required">Phone required</span>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-lg-1">
                    <div class="justify-content-center align-self-center pt-1">
                      <img class="user-icon" src="/src/img/label.svg" alt="">
                    </div>
                  </div>
                  <div class="form-group col-md-10 mx-2">
                    <label class="d-block">Label</label>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" v-model="contact.labels" type="checkbox" id="inlineCheckbox1"
                        value="elektronika">
                      <label class="form-check-label" for="inlineCheckbox1">Elektronika</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" v-model="contact.labels" type="checkbox" id="inlineCheckbox2"
                        value="distributer">
                      <label class="form-check-label" for="inlineCheckbox2">Distributer</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" v-model="contact.labels" type="checkbox" id="inlineCheckbox2"
                        value="programiranje">
                      <label class="form-check-label" for="inlineCheckbox2">Programiranje</label>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
                  <button type="submit" value="submit" class="btn btn-success">Save</button>
                </div>
              </form>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import {
    required,
    email
  } from 'vuelidate/lib/validators'

  export default {
    props: {
      contact: Object,
      mode: String
    },
    data() {
      return {
        copy: {
          firstName: '',
          lastName: '',
          email: '',
          adress: '',
          company: '',
          phone: ''
        }
      }
    },
    validations: {
      copy: {
        firstName: {
          required
        },
        lastName: {
          required
        },
        email: {
          required,
          email,
          checkEmail(email) {
            if (email === '') return true;
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
          }
        },
        adress: {
          required
        },
        company: {
          required
        },
        phone: {
          required
        }
      }
    },
    methods: {
      save() {
        this.$emit('save', this.copy);
        this.$emit('close');
      }
    },
    created: function () {
      this.copy = {
        ...this.contact
      };
    },
  }
</script>

<style lang="scss">
  .user-icon {
    height: 70px;
    width: 50px;
  }

  input {
    outline: none !important;
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .edit-contact .modal-container {
    width: 800px;
    margin: 0 auto;
    padding: 10px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-body {
    overflow-y: auto;
    max-height: calc(100vh - 180px);
  }

  .modal-enter,
  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter-active,
  .modal-leave-active {
    transition: .4s;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>