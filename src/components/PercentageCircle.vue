<script>
  import gsap from "gsap";

  export default {
    props: ["percentage"],
    mounted() {
      this.animateCircle();
    },
    computed: {
      // Berechnet den Umfang des Kreises basierend auf dem Radius
      circumference() {
        return 2 * Math.PI * 23;
      }
    },
    methods: {
      animateCircle() {
        var $statCircle = document.querySelectorAll(".stat-circle circle.progress");

        for (var circle of $statCircle) {
          var circumference = 2 * Math.PI * circle.r.baseVal.value;
          var off = circumference - (circumference * (parseFloat(circle.dataset.percentage) / 100));

          gsap.to(circle, {
            duration: 0.4,
            strokeDashoffset: off
          });
        }
      },
    }
  }
</script>

<template>
  <svg class="stat-circle" width="50" height="50">
    <circle class="bg" cx="25" cy="25" r="23"></circle>
    <!-- Bindet die stroke-dasharray- und stroke-dashoffset-Eigenschaften an die circumference-Eigenschaft -->
    <circle class="progress" cx="25" cy="25" r="23" :stroke-dasharray="circumference" :stroke-dashoffset="circumference" :data-percentage="percentage"></circle>
    <text x="50%" y="50%" dy=".3em">{{ percentage }}%</text>
  </svg>
</template>

<style scoped>
  .stat-circle circle.bg {
    fill: none;
    stroke: #f1f1f1;
    stroke-width: 2;
  }
  
  .stat-circle circle.progress {
    fill: none;
    stroke: #2ecc71;
    stroke-width: 2;
    stroke-linecap: round;
  }
  
  .stat-circle text {
    font-size: 3px;
    text-anchor: middle;
    fill: #555;
  }
</style>
