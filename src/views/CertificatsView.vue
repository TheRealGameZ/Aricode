<template>
  <div class="row">
    <header class="text-center">
      <h2>Certificates</h2>
      <div class="horizontalLine"></div>
    </header>
    <div class="container">
      <div class="row g-4">
        <div class="col d-flex mx-auto align-items-center justify-content-center"
             v-for="(card, index) in flipCards"
             :key="card"
             @mouseover="flipCard(index)">
          <flip-cart :title="card.title" :content="card.content" :class="{ 'hover': flippedCard === index }"></flip-cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FlipCart from "@/components/FlipCart.vue";

export default {
  data() {
    return {
      flippedCard: null,
      flipCards: require('../assets/data.json').certificates
    };
  },mounted() {
    let element = document.getElementById('headerContainer');
    element.classList.add('headerHeightSmall');
  },

  components: {FlipCart },
  methods: {
    flipCard(index) {
      this.flippedCard = index;
    },
  },
}
</script>
