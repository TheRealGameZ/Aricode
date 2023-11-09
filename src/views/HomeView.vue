<script>
import PercentageCircle from "@/components/PercentageCircle.vue";
import { ref } from "vue";

export default {
  name: "HomeView",
  components: { PercentageCircle },
    mounted() {
      document.getElementById('headerContainer').classList.remove('headerHeightSmall');
    },

  setup() {
    const selectedItem = ref("part1");
    const selectItem = (item, event) => {
      selectedItem.value = item;

      document.querySelectorAll(".btnContainer").forEach((container) => {
        if (container.classList.contains("active"))
          container.classList.remove("active");
      });

      let element = event.target.parentNode;
      element.classList.add("active");
    };

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
  },
};
</script>

<template>
  <div class="row mb-5">
    <header class="text-center">
      <h2>About</h2>
      <div class="horizontalLine"></div>
    </header>
    <div class="container grid justify-content-evenly">
      <div class="row gap-1 text-center">
        <div class="col fade-in anim-delay-500ms">
          <div
            class="polygon mx-auto d-flex align-items-center justify-content-center mb-4"
          >
            <i class="bi bi-cart4"></i>
          </div>
          <h3>Versatile in E-Commerce</h3>
          <p>Proficient in Salesforce - crafting tailored webshop solutions</p>
        </div>
        <div class="col fade-in anim-delay-1000ms">
          <div
            class="polygon mx-auto d-flex align-items-center justify-content-center mb-4"
          >
            <i class="bi bi-laptop"></i>
          </div>
          <h3>Organized and Efficient</h3>
          <p>Structured work approach for orderly results</p>
        </div>
        <div class="col fade-in anim-delay-1500ms">
          <div
            class="polygon mx-auto d-flex align-items-center justify-content-center mb-4"
          >
            <i class="bi bi-chat-square-dots"></i>
          </div>
          <h3>Collaborative Tech Mentor</h3>
          <p>Giving basic Code-Courses</p>
        </div>
        <div class="col fade-in anim-delay-2000ms">
          <div
            class="polygon mx-auto d-flex align-items-center justify-content-center mb-4"
          >
            <i class="bi bi-lightbulb"></i>
          </div>
          <h3>Innovative Architect</h3>
          <p>Pioneer in introducing Headless-Salesforce architecture</p>
        </div>
      </div>
    </div>
    <div class="container" style="margin-top: 100px">
      <div class="row mx-auto d-flex align-items-center justify-content-center">
        <div class="col text-center fade-in anim-delay-1000ms">
          <div
            class="polygon mx-auto d-flex align-items-center justify-content-center mb-4"
            id="picture"
          ></div>
          <h2>Who am I?</h2>
          <p>
            I'm a software engineer based in Gera with 2 years of experience in
            Commerce. My focus area for the past few months has been a mix of
            front- and backend development in Salesforce B2B Commerce.
          </p>
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
    <div class="container">
      <div class="row p-5 mb-5 fade-in anim-delay-500ms borderContainer">
        <h3>IT-Soldier</h3>
        <span class="mb-2 fst-italic">Bundeswehr, Sonderhausen, Germany – (Sep 2020 - Okt 2021)</span>
        <p>
          Served as an IT soldier, contributing to the operational efficiency of the IT department.
          Provided administrative assistance to the IT department, ensuring smooth operations and effective communication.
          Conducted maintenance and configuration tasks for IT hardware, ensuring optimal performance.
          Assisted in the training of new recruits, contributing to the onboarding process and knowledge transfer.
        </p>
      </div>
      <div class="row p-5 mb-5 fade-in anim-delay-500ms borderContainer">
        <h3>Bachelor's Degree in Business Informatics </h3>
        <span class="mb-2 fst-italic">2021-2024, Duale Hochschule Gera-Eisenach, Gera</span>
      </div>
      <div class="row p-5 mb-5 fade-in anim-delay-500ms borderContainer">
        <h3>Software Engineer</h3>
        <span class="mb-2 fst-italic">Plan-Soft Einrichtungsplanung GmbH, Gera, Germany – (Okt 2021 - Dec 2022)</span>
        <p>
          Proficient in creating customized website designs using CMS systems such as WordPress, including HTML and CSS.
          Gained initial experience in Shopify and Shopware, demonstrating versatility in adapting to various e-commerce platforms.
          Successfully developed a feature-rich app launcher using WPF/XAML and C#, showcasing advanced skills in desktop application development.
          Established and configured a terminal server for a client, demonstrating expertise in server infrastructure deployment.
          Provided ongoing support and maintenance for IT hardware, maintaining close communication with clients to address issues promptly.
        </p>
      </div>
      <div class="row p-5 mb-5 fade-in anim-delay-500ms borderContainer">
        <h3>Software Engineer II</h3>
        <span class="mb-2 fst-italic">dotSource SE, Jena, Germany – (Dec 2022 - Present)</span>
        <p>      
          Specialized Fullstack Web Developer in Salesforce with a focus on B2B Commerce and Commerce Cloud.
          Started the implementation of Headless-Salesforce Architecture, establishing its presence within the company.
          Contributed to the creation of tailored webshops for clients, showcasing expertise in Salesforce technologies.
          Played a pivotal role in the "Code-Camp," imparting foundational skills in CSS, HTML, and JavaScript to students.
        </p>
      </div>
    </div>
  </div>
</template>