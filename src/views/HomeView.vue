<script>
import PercentageCircle from '@/components/PercentageCircle.vue';
import { ref } from 'vue';

export default {
  name: 'HomeView',
  components: { PercentageCircle },

  setup() {
    const selectedItem = ref('part1');
    const selectItem = (item, event) => {
      selectedItem.value = item;

      document.querySelectorAll('.btnContainer').forEach( container => {
        if(container.classList.contains('active')) container.classList.remove('active');
      })

      let element = event.target.parentNode;
      element.classList.add('active');
    }

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

    window.addEventListener("scroll", reveal);

    return { selectedItem, selectItem };
  }
}
</script>

<template>
  <div class="row mb-5">
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
  <div class="row">
    <header class="text-center">
      <h2>Experience</h2>
      <div class="horizontalLine"></div>
    </header>
    <div class="container" style="min-height: 300px">
      <div class="row">
        <div class="col d-flex justify-content-center align-items-center">
          <div class="btnContainer">
            <a class="timelineBtn" @click="($event) => selectItem('part1', $event)">2020</a>
          </div>
        </div>
        <div class="col d-flex justify-content-center align-items-center">
          <div class="btnContainer">
            <a class="timelineBtn" @click="($event) => selectItem('part2', $event)">2021</a>
          </div>
        </div>
        <div class="col d-flex justify-content-center align-items-center">
          <div class="btnContainer">
            <a class="timelineBtn" @click="($event) => selectItem('part3', $event)">2022</a>
          </div>
        </div>
        <div class="col d-flex justify-content-center align-items-center">
          <div class="btnContainer">
            <a class="timelineBtn" @click="($event) => selectItem('part4', $event)">2023</a>
          </div>
        </div>
        <div class="col d-flex justify-content-center align-items-center">
          <div class="btnContainer">
            <a class="timelineBtn" @click="($event) => selectItem('part5', $event)">2024</a>
          </div>
        </div>
      </div>
      <div class="container">
      <div class="row p-5" v-if="selectedItem === 'part1'">
        <h4>IT-Solider</h4>
        <p>Bundeswehr, Sonderhausen, Germany – (Sep 2020 - Okt 2021)</p>
        <ul>
          <li>Served as an IT soldier, contributing to the operational efficiency of the IT department</li>
          <li>Provided administrative assistance to the IT department, ensuring smooth operations and effective communication</li>
          <li>Conducted maintenance and configuration tasks for IT hardware, ensuring optimal performance</li>
          <li>Assisted in the training of new recruits, contributing to the onboarding process and knowledge transfer</li>
        </ul>
      </div>
      <div class="row" v-else-if="selectedItem === 'part2'">
        <div class="row">
          <h4>IT-Solider</h4>
          <p>Bundeswehr, Sonderhausen, Germany – (Sep 2020 - Okt 2021)</p>
          <ul>
            <li>Served as an IT soldier, contributing to the operational efficiency of the IT department</li>
            <li>Provided administrative assistance to the IT department, ensuring smooth operations and effective communication</li>
            <li>Conducted maintenance and configuration tasks for IT hardware, ensuring optimal performance</li>
            <li>Assisted in the training of new recruits, contributing to the onboarding process and knowledge transfer</li>
          </ul>
        </div>
        <div class="row">
          <h4>IT-Solider</h4>
          <p>Bundeswehr, Sonderhausen, Germany – (Sep 2020 - Okt 2021)</p>
          <ul>
            <li>Served as an IT soldier, contributing to the operational efficiency of the IT department</li>
            <li>Provided administrative assistance to the IT department, ensuring smooth operations and effective communication</li>
            <li>Conducted maintenance and configuration tasks for IT hardware, ensuring optimal performance</li>
            <li>Assisted in the training of new recruits, contributing to the onboarding process and knowledge transfer</li>
          </ul>
        </div>
      </div>
      <div class="row" v-else-if="selectedItem === 'part3'">
        <p>3</p>
      </div>
      <div class="row" v-else-if="selectedItem === 'part4'">
        <p>4</p>
      </div>
      <div class="row" v-else-if="selectedItem === 'part5'">
        <p>5</p>
      </div>
    </div>
    </div>
  </div>

</template>