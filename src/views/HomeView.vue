<template>
  <header class="mainHeader">
    <div class="headerContent">

      <div class="navigation">
        <navigation-bar></navigation-bar>
      </div>

      <div class="welcomeText">
        <h1>Hi i&#x27;m <span>Andreas Richter</span></h1>
        <button  type="button" class="btn btn-outline-secondary btn-lg">Contact me</button>
      </div>

      <div class="socialMedia">
        <ul style="list-style: none">
          <li><i class="bi bi-linkedin"></i></li>
          <li><i class="bi bi-linkedin"></i></li>
          <li><i class="bi bi-linkedin"></i></li>
        </ul>
      </div>

    </div>
  </header>

  <main>
    <article>
      <header>
        <h2>About me</h2>
      </header>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </article>
    <article>
      <header>
        <h2>Skills</h2>
      </header>
      <div class="skills">
        <div v-for="(card, index) in flipCards" :key="index">
          <flip-cart :title="card.title" :content="card.content"></flip-cart>
        </div>
      </div>
    </article>
    <article>
      <header>
        <h2>Projects</h2>
      </header>
      <p>Hello</p>
    </article>
  </main>
</template>

<script>
import FlipCart from "@/components/FlipCart.vue";
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: 'HomeView',
  components: {
    NavigationBar,
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