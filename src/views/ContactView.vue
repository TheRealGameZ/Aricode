<template>
  <div class="row">
      <header class="text-center">
        <h2>Contact</h2>
        <div class="horizontalLine"></div>
      </header>
      <div class="container">
        <form>
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
      </div>
  </div>
</template>