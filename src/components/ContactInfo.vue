<template>
  <transition appear name="modal">
    <div class="contact-info modal-mask">
      <div class="modal-wrapper" @click="$emit('close')">
        <div :class="(mode === 'light' ? 'bg-light' : 'bg-dark text-light')"
        class="container modal-container" @click.stop="">
          <div class="modal-header">
            <slot name="header">
              <h3 class="modal-title" id="exampleModalScrollableTitle">{{ fullName() }}</h3>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <div class="col-md">
                <h5>Contact Details</h5>
              </div>
              <div class="contact-info col-md">
                <div class="contact-info-item col-md d-flex p-0">
                  <img src="/src/img/mail.svg" alt="">
                  <a :href="'mailto:' + contact.email" @click.stop="">
                    <p class="p-2 m-0">{{ contact.email }}</p>
                  </a>
                </div>
                <div class="contact-info-item col-md d-flex p-0">
                  <img src="/src/img/location.svg" alt="">
                  <p class="p-2 m-0">{{ contact.adress }}</p>
                </div>
                <div class="contact-info-item col-md d-flex p-0">
                  <img src="/src/img/company.svg" alt="">
                  <p class="p-2 m-0">{{ contact.company }}</p>
                </div>
                <div class="contact-info-item col-md d-flex p-0">
                  <img src="/src/img/phone.svg" alt="">
                  <p class="p-2 m-0">{{ contact.phone }}</p>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      contact: Object,
      mode: String
    },
    methods: {
      fullName() {
        return this.contact.firstName + ' ' + this.contact.lastName;
      },
    }
  }
</script>

<style lang="scss">
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

  .contact-info .modal-container {
    width: 500px;
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
    max-height: calc(100vh - 250px);
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

  .contact-info-item img {
    height: 40px;
    width: 30px;
    margin-right: 10px;
  }
</style>