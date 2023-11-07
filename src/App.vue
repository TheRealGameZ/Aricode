<template>
  <div class="container-fluid">
    <div class="row mainHeader">
      <div class="row headerContent justify-content-md-center d-flex align-items-top" style="padding-top: 150px;">
        <div class="col-md-auto">
          <h1>Hi i&#x27;m <span>Andreas Richter</span></h1>
          <button style="margin-top: 30px" type="button" class="btnMain">Contact me</button>
        </div>
      </div>
    </div>
    <div class="row">
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
  components: { NavigationBar,FooterBar }
})
</script>