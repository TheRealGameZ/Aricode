<template>
  <div class="row">
    <header class="text-center">
      <h2>Projects</h2>
      <div class="horizontalLine"></div>
    </header>
    <div class="container">
      <div class="row g-5">
        <div class="col d-flex mx-auto align-items-center justify-content-center"
             v-for="(card, index) in flipCards"
             :key="card"
             @mouseover="flipCard(index)">
          <div class="borderContainer p-4 text-center" style="width: 300px; height: 300px;">
            <h5 class="mb-3">{{ card.title }}</h5>
            <p class="mb-5">{{ card.text }}</p>
            <p :style="{ color: card.color }">{{ card.link }}</p>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      flippedCard: null,
      flipCards: require('../assets/data.json').projects
    };
  },mounted() {
    let element = document.getElementById('headerContainer');
    element.classList.add('headerHeightSmall');
  },

  methods: {
    flipCard(index) {
      this.flippedCard = index;
    }
  },
}
</script>