<script>
export default {
  data() {
    return {
      formSubmitted: false,
      formSuccess: false,
      urlPath : 'https://aricode.de/post/contactForm'
    };
  },
  mounted() {
    this.scrollToElement();
    document.getElementById('headerContainer').classList.add('headerHeightSmall');
  },
  methods: {

    async submitForm(e) {
  e.preventDefault();
  this.formSubmitted = true;

  let name = document.getElementById('nameInput').value;
  let email = document.getElementById('emailInput').value;
  let text = document.getElementById('messageInput').value;

  const data = {
    name: name,
    email: email,
    text: text
  };

  await fetch(this.urlPath, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Set content type to JSON
    },
    body: JSON.stringify(data) // Convert data to JSON string
  })
    .then(response => {
      if (response.ok) {
        return response.text(); // Extract the response body as text
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then(string => {
      window.alert(string);
      this.formSuccess = true;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      this.formSuccess = false;
    });
  }
  }
}
</script>

<template>
  <div class="row">
    <header class="text-center">
      <h2>Contact</h2>
      <div class="horizontalLine"></div>
    </header>
    <div class="container" id="contact">
      <form @submit="submitForm" method="post">
        <div class="mb-3">
          <label for="nameInput" class="form-label fs-5">Name</label>
          <input type="text" class="form-control" id="nameInput" maxlength="50" required>
        </div>
        <div class="mb-3">
          <label for="emailInput" class="form-label fs-5">Email address</label>
          <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" required>
        </div>
        <div class="mb-3">
          <label for="messageInput" class="form-label fs-5">Your Message</label>
          <textarea class="form-control" id="messageInput" maxlength="500"></textarea>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
          <label class="form-check-label" for="exampleCheck1">Hiermit bestätige ich, dass ich die <a href="/datenschutz">Datenschutzerklärung</a> gelesen habe</label>
        </div>
        <button type="submit" class="btnPrimary">Submit</button>
      </form>
      <div v-if="formSubmitted" class="mt-3">
        <div v-if="formSuccess" class="alert alert-success">
          Ihre Nachricht wurde erfolgreich gesendet!
        </div>
        <div v-else class="alert alert-danger">
          Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.
        </div>
      </div>
    </div>
  </div>
</template>
