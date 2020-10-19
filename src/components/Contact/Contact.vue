<template>
  <div
    id="contact"
    class="contact-container"
    data-aos="fade-up"
    data-aos-offset="80"
    data-aos-delay="40"
    data-aos-duration="500"
    data-aos-mirror="true"
  >
    <h1>Contact</h1>

    <form action="post" @submit="onSubmit">
      <input
        type="text"
        placeholder="Name"
        v-model="name"
        @blur="$v.name.$touch()"
        :class="{
          'is-invalid-input': $v.name.$model && $v.name.$error,
          valid: $v.name.$dirty && !$v.name.$error
        }"
      />

      <input
        type="email"
        placeholder="Email"
        v-model="email"
        @blur="$v.email.$touch()"
        :class="{
          'is-invalid-input': $v.email.$model && $v.email.$error,
          valid: $v.email.$dirty && !$v.email.$error
        }"
      />
      <textarea
        name="message"
        id="message"
        cols="40"
        rows="10"
        placeholder="Message"
        v-model="message"
        @blur="$v.message.$touch()"
        :class="{
          'is-invalid-button': $v.message.$model && $v.message.$error,
          valid: $v.message.$dirty && !$v.message.$error
        }"
      ></textarea>
      <button
        type="submit"
        :disabled="$v.$invalid"
        :class="{
          'is-invalid-button': $v.$invalid
        }"
      >
        SEND
      </button>
    </form>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
export default {
  name: "Contact",
  data() {
    return {
      name: null,
      email: null,
      message: ""
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(50)
    },
    email: {
      required,
      email
    },
    message: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(200)
    }
  },
  methods: {
    onSubmit() {
      let form = {
        name: this.name,
        email: this.email,
        message: this.message
      };
      console.log(form);
    }
  }
};
</script>

<style scoped lang="scss">
.contact-container {
  height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-image: url(../../assets/illustrations/contact.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  clip-path: polygon(0 10%, 100% 0%, 100% 80%, 0% 100%);
  @media (max-width: 649px) {
    background-position: left;
    height: 80vh;
    clip-path: polygon(0 5%, 100% 0%, 100% 94%, 0% 100%);
  }
  @media (max-height: 580px) {
    height: 100vh;
  }
  h1 {
    text-align: center;
    color: var(--c-header);
    @media (max-width: 649px) {
      //margin-top: 40px;
    }
  }
  form {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px;
    gap: 20px;
    width: 50%;
    @media (max-width: 649px) {
      width: 100%;
      padding: 20px;
    }
    .is-invalid-input {
      box-shadow: 0 0 2pt 2pt var(--c-invalid);
    }
    .is-invalid-button {
      background-color: var(--c-button-invalid-background);
      color: var(--c-button-invalid-color);
      cursor: default;
      &:hover {
        background-color: var(--c-button-invalid-background);
        color: var(--c-button-invalid-color);
      }
    }
    .valid {
      box-shadow: 0 0 2pt 2pt var(--c-valid);
    }
    input {
      width: 70%;
      padding: 14px;
      resize: vertical;
      border-radius: 6px;
      position: relative;
      outline: none;
      &:focus {
        box-shadow: 0 0 2pt 2pt var(--c-normal);
      }
      @media (max-width: 649px) {
        width: 90%;
      }
    }
    textarea {
      width: 70%;
      padding: 14px;
      resize: vertical;
      border-radius: 6px;
      outline: none;
      &:focus {
        box-shadow: 0 0 2pt 2pt var(--c-normal);
      }
      @media (max-width: 649px) {
        width: 90%;
      }
    }
    button {
      padding: 12px 20px;
      background-color: var(--c-button-valid-background);
      border-radius: 4px;
      color: var(--c-button-valid-color);
      letter-spacing: 4px;
      transition: 300ms background-color, 300ms color;
      &:hover {
        background-color: var(--c-button-hover-background);
        color: var(--c-button-hover-color);
      }
    }
  }
}
</style>
