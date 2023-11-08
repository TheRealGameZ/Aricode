<template>
  <div class="row">
    <header class="text-center">
      <h2>Certificates</h2>
      <div class="horizontalLine"></div>
    </header>
    <div class="container">
      <div class="row  g-5">
        <div class="col d-flex mx-auto justify-content-center align-items-center" v-for="card in flipCards" v-bind:key="card">
          <flip-cart :title="card.title" :content="card.content"></flip-cart>
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
      flipCards: [
        { title: "Git / GitHub / Gitlab", content: "Content for Card 1" },
        { title: "HTML/CSS", content: "Content for Card 2" },
        { title: "Jira & Confluence", content: "Content for Card 2" },
        { title: "Salesforce / Commerce-Cloud", content: "Content for Card 2" },
        { title: "SpringBoot & Thymeleaf", content: "Content for Card 2" },
        { title: "WPF/XAML", content: "Content for Card 2" },
        { title: "C# / C", content: "Content for Card 2" },
        { title: "Java", content: "Content for Card 2" },
        { title: "JavaScript", content: "Content for Card 2" }
      ]
    };
  },
  components: {FlipCart }
}
</script>