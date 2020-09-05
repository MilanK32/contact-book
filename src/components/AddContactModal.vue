<template>
  <transition appear name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click="$emit('close')">
        <div :class="(mode === 'light' ? 'bg-light' : 'bg-dark text-light')" 
        class="container modal-container" @click.stop="">
          <div class="modal-header">
            <slot name="header">
              <h5 class="modal-title" id="exampleModalScrollableTitle">Add a Contact</h5>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <form @submit.prevent="submitForm">
                <div class="form-row">
                  <div class="form-group col-lg-1">
                    <div class="justify-content-center align-self-center">
                      <img class="user-icon" src="/src/img/user.svg" alt="">
                    </div>
                  </div>
                  <div class="form-group col-md-5 ml-2">
                    <label>First Name</label>
                    <input type="text" v-model.trim="$v.contact.firstName.$model"
                      :class="{'is-invalid': $v.contact.firstName.$error, 'is-valid': !$v.contact.firstName.$invalid}"
                      class="form-control shadow-none" placeholder="Enter First Name">
                    <div class="invalid-feedback">
                      <span v-if="!$v.contact.firstName.required">First Name required</span>
                      <span v-if="!$v.contact.firstName.checkFistName">First name must include only letters</span>
                    </div>
                  </div>
                  <div class="form-group col-md-5 ">
                    <label>Last Name</label>
                    <input type="text" v-model.trim="$v.contact.lastName.$model"
                      :class="{'is-invalid': $v.contact.lastName.$error, 'is-valid': !$v.contact.lastName.$invalid}"
                      class="form-control shadow-none" placeholder="Enter First Name">
                    <div class="invalid-feedback">
                      <span v-if="!$v.contact.lastName.required">Last Name required</span>
                      <span v-if="!$v.contact.lastName.checkFistName">First name must include only letters</span>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-lg-1">
                    <div class="justify-content-center align-self-center pt-1">
                      <img class="user-icon" src="/src/img/mail.svg" alt="">
                    </div>
                  </div>
                  <div class="form-group col-md-10 mx-2">
                    <label>Email Address</label>
                    <input type="email" v-model.trim="$v.contact.email.$model"
                      :class="{'is-invalid': $v.contact.email.$error, 'is-valid': !$v.contact.email.$invalid}"
                      class="form-control shadow-none" aria-describedby="emailHelp" placeholder="Enter email">
                    <div class="invalid-feedback">
                      <span v-if="!$v.contact.email.required">Email required</span>
                      <span v-if="!$v.contact.email.checkEmail">Enter valid email</span>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-lg-1">
                    <div class="justify-content-center align-self-center">
                      <img class="user-icon" src="/src/img/company.svg" alt="">
                    </div>
                  </div>
                  <div class="form-group col-md-5 ml-2">
                    <label>Adress</label>
                    <input type="text" v-model.trim="$v.contact.adress.$model"
                      :class="{'is-invalid': $v.contact.adress.$error, 'is-valid': !$v.contact.adress.$invalid}"
                      class="form-control shadow-none" placeholder="Enter Adress">
                    <div class="invalid-feedback">
                      <span v-if="!$v.contact.adress.required">Adress required</span>
                    </div>
                  </div>
                  <div class="form-group col-md-5">
                    <label>Company</label>
                    <input type="text" v-model.trim="$v.contact.company.$model"
                      :class="{'is-invalid': $v.contact.company.$error, 'is-valid': !$v.contact.company.$invalid}"
                      class="form-control shadow-none" placeholder="Enter Company">
                    <div class="invalid-feedback">
                      <span v-if="!$v.contact.company.required">Company required</span>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-lg-1">
                    <div class="justify-content-center align-self-center pt-1">
                      <img class="user-icon" src="/src/img/phone.svg" alt="">
                    </div>
                  </div>
                  <div class="form-group col-md-10 mx-2">
                    <label>Phone Number</label>
                    <input type="number" v-model.trim="$v.contact.phone.$model"
                      :class="{'is-invalid': $v.contact.phone.$error, 'is-valid': !$v.contact.phone.$invalid}"
                      class="form-control shadow-none" placeholder="Enter Phone Number">
                    <div class="invalid-feedback">
                      <span v-if="!$v.contact.phone.required">Phone required</span>
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
  import VueTagsInput from '@johmun/vue-tags-input';
  import axios from 'axios';

  export default {
    props: {
      mode: String
    },
    data() {
      return {
        contact: {
          firstName: '',
          lastName: '',
          email: '',
          adress: '',
          company: '',
          phone: '',
          labels: []
        },
        submitStatus: null
      }
    },
    validations: {
      contact: {
        firstName: {
          required,
          checkFistName(firstName) {
            if (firstName === '') return true;
            var re = /^[a-zA-Z\s]*$/;
            return re.test(firstName);
          }
        },
        lastName: {
          required,
          checkFistName(lastName) {
            if (lastName === '') return true;
            var re = /^[a-zA-Z\s]*$/;
            return re.test(lastName);
          }
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
      addContact() {
        this.$emit('passArr', this.contact);
        this.$emit('close');
        this.contact = {
          firstName: '',
          lastName: '',
          email: '',
          adress: '',
          company: '',
          phone: ''
        };
      },
      submitForm() {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.addContact();
        }
      }
    }
  }
</script>

<style lang="scss">
  body {
    overflow: hidden;
  }

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
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
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