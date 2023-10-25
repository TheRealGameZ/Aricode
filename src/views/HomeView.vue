<template>
  <div class="container-fluid backgroundContainer">
    <div class="text">
      <h1 class="headline">Hi i&#x27;m <span>Andreas Richter</span></h1>
      <button  type="button" class="btn btn-outline-secondary btn-lg">Contact me</button>
    </div>
    <div class="socialMedia">
      <p><i class="bi bi-linkedin"></i></p><br>
      <p><i class="bi bi-linkedin"></i></p><br>
      <p><i class="bi bi-linkedin"></i></p>
    </div>
  </div>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <article>
          <header>
            <h2>About Me</h2>
          </header>

        </article>
      </div>
      <div class="row">
        <article>
          <header>
            <h2>Skills</h2>
          </header>
          <div class="d-flex flex-row flex-wrap justify-content-center">
            <div class="p-5" v-for="(card, index) in flipCards" :key="index">
              <flip-cart :title="card.title" :content="card.content"></flip-cart>
            </div>
          </div>
        </article>
      </div>
      <div class="row">
        <article>
        </article>
      </div>
      <div class="row">
        <article>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import FlipCart from "@/components/FlipCart.vue";

export default {
  name: 'HomeView',
  components: {
    FlipCart
  },
  data() {
    return {
      flipCards: [
        { title: "Card 1", content: "Content for Card 1" },
        { title: "Card 2", content: "Content for Card 2" },
        { title: "Card 2", content: "Content for Card 2" },
        { title: "Card 2", content: "Content for Card 2" },
        { title: "Card 2", content: "Content for Card 2" },
        { title: "Card 2", content: "Content for Card 2" },
        { title: "Card 2", content: "Content for Card 2" },
        { title: "Card 2", content: "Content for Card 2" },
        { title: "Card 2", content: "Content for Card 2" },
        { title: "Card 2", content: "Content for Card 2" },
        { title: "Card 2", content: "Content for Card 2" },
      ]
    };
  }
}
</script>

<style>
nav {
  background-color: transparent;
  position: absolute;
  left: 10%;
}

.backgroundContainer{
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: repeat(3,1fr);

}

.text{
  grid-column-start: 2;
  grid-row-start: 2;
  display: block;
}

.text h1 span{
  color: #C44536;
}

.text h1{
  white-space: nowrap;
  letter-spacing: .1em;
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
  margin-bottom: 1rem;
}

.socialMedia{
  padding: 20%;
  grid-column-start: 3;
  grid-row-start: 3;
  text-align: right;

}

.socialMedia p {
  font-size: 3rem;
  text-align: right;
  display: inline;
}

.socialMedia p:hover {
  color: #C44536;
  -webkit-animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  cursor: pointer;

}

@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-15px);
            transform: translateY(-15px);
  }
}
@keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

</style>