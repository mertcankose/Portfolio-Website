<template>
  <div class="contact-container">
    <h1>Contact</h1>

    <form action="post">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea
        name=""
        id=""
        cols="40"
        rows="10"
        placeholder="Message"
      ></textarea>
      <button type="submit">SEND</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.contact-container {
  height: 75vh;
  //border: 2px solid #000;
  display: flex;
  flex-direction: column;
  background-image: url(../../assets/illustrations/contact.png);
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  clip-path: polygon(0 10%, 100% 0%, 100% 83%, 0% 100%);
  @media (max-width: 649px) {
    background-position: left;
  }
  h1 {
    text-align: center;
    margin-top: 80px;
    color: #fff;
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
    width: 60%;
    @media (max-width: 649px) {
      width: 100%;
      padding: 20px;
    }
    input {
      width: 100%;
      max-width: 482px;
      padding: 14px;
      border-radius: 6px;
      outline: none;
    }
    textarea {
      padding: 14px;
      resize: none;
      max-width: 100%;
      border-radius: 6px;
      outline: none;
    }
    button {
      padding: 12px 20px;
      background-color: #fff;
      border-radius: 4px;
      color: #000;
      letter-spacing: 4px;
      transition: 300ms background-color, 300ms color;
      &:hover {
        background-color: #4f8dff;
        color: #fff;
      }
    }
  }
}
</style>
