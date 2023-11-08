<template>
  <div class="row">
    <header class="text-center">
        <h2>About</h2>
        <div class="horizontalLine"></div>
    </header>
    <div class="container grid justify-content-evenly">
        <div class="row gap-1 text-center" >
            <div class="col fade-in anim-delay-500ms">
                <div class="polygon mx-auto d-flex align-items-center justify-content-center mb-4">
                  <i class="bi bi-cart4"></i>
                </div>
                <h3>Versatile in E-Commerce</h3>
                <p> Proficient in Salesforce - crafting tailored webshop solutions</p>
            </div>
            <div class="col fade-in anim-delay-1000ms">
                <div class="polygon mx-auto d-flex align-items-center justify-content-center mb-4">
                  <i class="bi bi-laptop"></i>
                </div>
                <h3>Organized and Efficient</h3>
                <p>Structured work approach for orderly results</p>
            </div>
            <div class="col fade-in anim-delay-1500ms">
                <div class="polygon mx-auto d-flex align-items-center justify-content-center mb-4">
                  <i class="bi bi-chat-square-dots"></i>
                </div>
                <h3>Collaborative Tech Mentor</h3>
                <p>Giving basic Code-Courses</p>
            </div>
            <div class="col fade-in anim-delay-2000ms">
                <div class="polygon mx-auto d-flex align-items-center justify-content-center mb-4">
                  <i class="bi bi-lightbulb"></i>
                </div>
                <h3>Innovative Architect</h3>
                <p>Pioneer in introducing Headless-Salesforce architecture</p>
            </div>
        </div>
    </div>
    <div class="container" style="margin-top: 100px;">
        <div class="row mx-auto d-flex align-items-center justify-content-center">
            <div class="col text-center fade-in anim-delay-1000ms">
                <div class="polygon mx-auto d-flex align-items-center justify-content-center mb-4" id="picture">
                </div>
                <h2>Who am I?</h2>
                <p>I'm a software engineer based in Gera with 2 years of experience in Commerce. My focus area for the past few months has been a mix of front- and backend development in Salesforce B2B Commerce.</p>
            </div>
            <div class="col-6">
              <div class="row d-flex text-center mb-3 fade-in anim-delay-1000ms">
                <div class="col">
                  <PercentageCircle :percentage="80"></PercentageCircle>
                  <h6>HTML/CSS</h6>
                </div>
                <div class="col text-center mb-3">
                  <PercentageCircle :percentage="70"></PercentageCircle>
                  <h6>Java</h6>
                </div>
              </div>
              <div class="row d-flex text-center mb-3 fade-in anim-delay-1000ms">
                <div class="col">
                  <PercentageCircle :percentage="50"></PercentageCircle>
                  <h6>JavaScript & npm</h6>
                </div>
                <div class="col">
                  <PercentageCircle :percentage="40"></PercentageCircle>
                  <h6>Salesforce Commerce Cloud</h6>
                </div>
              </div>
              <div class="row d-flex text-center mb-3 fade-in anim-delay-1000ms">
                <div class="col">
                  <PercentageCircle :percentage="40"></PercentageCircle>
                  <h6>SpringBoot & Thymeleaf</h6>
                </div>
                <div class="col">
                  <PercentageCircle :percentage="30"></PercentageCircle>
                  <h6>C & C#</h6>
                </div>
              </div>
            </div>
        </div>
    </div>
</div>

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
    components: { PercentageCircle }
}

</script>