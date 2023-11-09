<template>
  <div class="container-fluid">
    <div id="headerContainer" class="row mainHeader">
      <div class="row headerContent justify-content-md-center d-flex align-items-top" style="padding-top: 150px;">
        <div class="col-md-auto">
          <h1>Hi i&#x27;m <span>Andreas Richter</span></h1>
          <router-link to="/contact" custom v-slot="{ navigate }">
            <button style="margin-top: 30px" type="button" class="btnPrimary animaBtn" @click="navigate" role="link">Contact me</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="row fade-in">
      <navigation-bar></navigation-bar>
    </div>
  </div>
  <div class="container pt-5">
    <router-view></router-view>
  </div>
  <div class="container-fluid" style="margin-top: 100px;">
    <div class="row">
      <footer-bar></footer-bar>
    </div>
  </div>
</template>


<script>
import {defineComponent} from "vue";
import NavigationBar from "./components/NavigationBar.vue";
import FooterBar from "./components/FooterBar.vue";

export default defineComponent({
  components: { NavigationBar,FooterBar },
  mounted() {
    let element = document.getElementById('headerContainer');
    element.classList.add('headerHeightSmall');
  }
})

window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.fade-in');
  elements.forEach(function(element) {
    var position = element.getBoundingClientRect();
    if(position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('visible');
    }
  });
});
</script>

<style>
  @font-face {
    font-family: 'Zilla Slab';
    src: local('Zilla Slab'), url('assets/ZillaSlab-Medium.ttf') format("truetype");
  }
</style>