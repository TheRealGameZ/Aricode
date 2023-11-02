<template>
  <header class="mainHeader">
    <div class="headerContent">

      <div class="navigation">
        <navigation-bar></navigation-bar>
      </div>

      <div class="welcomeText">
        <h1>Hi i&#x27;m <span>Andreas Richter</span></h1>
        <button style="margin-top: 30px" type="button" class="btnMain">Contact me</button>
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
    <article class="reveal" id="aboutMe">
      <header>
        <h2>About me</h2>
      </header>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </article>
    <article class="reveal" id="skills">
      <header>
        <h2>Skills</h2>
      </header>
      <div class="skills">
        <div v-for="(card, index) in flipCards" :key="index">
          <flip-cart :title="card.title" :content="card.content"></flip-cart>
        </div>
      </div>
    </article>
    <article class="reveal" id="projects">
      <header>
        <h2>Projects</h2>
      </header>
      <div class="skills">
        <div v-for="(card, index) in flipCards" :key="index">
          <flip-cart :title="card.title" :content="card.content"></flip-cart>
        </div>
      </div>
    </article>
    <article class="reveal" id="experience">
      <header>
        <h2>Experience</h2>
      </header>
      <section id="cd-timeline" class="cd-container">
        <div class="cd-timeline-block">
          <div class="cd-timeline-img cd-picture">
          </div>
          <div class="cd-timeline-content">
            <h2>Title of section 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
            <span class="cd-date">Jan 14</span>
          </div>
        </div>

        <div class="cd-timeline-block">
          <div class="cd-timeline-img cd-movie">
          </div>
          <div class="cd-timeline-content">
            <h2>Title of section 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
            
            <span class="cd-date">Jan 18</span>
          </div>
        </div>

        <div class="cd-timeline-block">
          <div class="cd-timeline-img cd-picture">
          </div>

          <div class="cd-timeline-content">
            <h2>Title of section 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p>
            
            <span class="cd-date">Jan 24</span>
          </div>
        </div>

        <div class="cd-timeline-block">
          <div class="cd-timeline-img cd-location">
          </div>

          <div class="cd-timeline-content">
            <h2>Title of section 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
            <span class="cd-date">Feb 14</span>
          </div>
        </div>

        <div class="cd-timeline-block">
          <div class="cd-timeline-img cd-location">
          </div>

          <div class="cd-timeline-content">
            <h2>Title of section 5</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
            
            <span class="cd-date">Feb 18</span>
          </div>
        </div>

        <div class="cd-timeline-block">
          <div class="cd-timeline-img cd-movie">
          </div>

          <div class="cd-timeline-content">
            <h2>Final Section</h2>
            <p>This is the content of the last section</p>
            <span class="cd-date">Feb 26</span>
          </div>
        </div>
      </section>
    </article>
  </main>
  <footer>
    <footer-bar></footer-bar>
  </footer>
</template>

<script>
import FlipCart from "@/components/FlipCart.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import FooterBar from "@/components/FooterBar.vue";

window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

export default {
  name: 'HomeView',
  components: {
    FooterBar,
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