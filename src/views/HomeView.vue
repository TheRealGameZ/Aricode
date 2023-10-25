<template>
  <div class="container-fluid backgroundContainer"></div>
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
</style>
