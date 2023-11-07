<template>
  <div class="row">
    <header class="text-center">
        <h2>About</h2>
        <div class="horizontalLine"></div>
    </header>
    <div class="container grid justify-content-evenly">
        <div class="row gap-1 text-center" >
            <div class="col">
                <div class="polygon mx-auto d-flex align-items-center justify-content-center mb-4">
                  <i class="bi bi-cart4"></i>
                </div>
                <h3>Versatile in E-Commerce</h3>
                <p> Proficient in Salesforce - crafting tailored webshop solutions</p>
            </div>
            <div class="col">
                <div class="polygon mx-auto d-flex align-items-center justify-content-center mb-4">
                  <i class="bi bi-laptop"></i>
                </div>
                <h3>Organized and Efficient</h3>
                <p>Structured work approach for orderly results</p>
            </div>
            <div class="col">
                <div class="polygon mx-auto d-flex align-items-center justify-content-center mb-4">
                  <i class="bi bi-chat-square-dots"></i>
                </div>
                <h3>Collaborative Tech Mentor</h3>
                <p>Giving basic Code-Courses</p>
            </div>
            <div class="col">
                <div class="polygon mx-auto d-flex align-items-center justify-content-center mb-4">
                  <i class="bi bi-lightbulb"></i>
                </div>
                <h3>Innovative Architect</h3>
                <p>Pioneer in introducing Headless-Salesforce architecture</p>
            </div>
        </div>
    </div>
    <div class="container" style="margin-top: 100px;">
        <div class="row">
            <div class="col text-center">
                <div class="polygon mx-auto d-flex align-items-center justify-content-center mb-4" id="picture">
                </div>
                <h2>Who is this Guy?</h2>
                <p>I'm a software engineer based in Gera with 2 years of experience in Commerce. My focus area for the past few months has been a mix of front- and backend development in Salesforce B2B Commerce.</p>
            </div>
            <div class="col-7"></div>
        </div>
    </div>
</div>

<PercentageCircle :percentage="100"></PercentageCircle>

</template>

<script>
import PercentageCircle from '@/components/PercentageCircle.vue';


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
                { title: "JavaScript", content: "Content for Card 2" },
                { title: "Vue.js", content: "Content for Card 2" },
            ]
        };
    },
    components: { PercentageCircle }
}

</script>