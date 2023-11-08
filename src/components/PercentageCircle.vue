<script>
import gsap from "gsap";

export default {
  props: ["percentage"],
  mounted() {
    this.animateCircle();
  },
  computed: {
    circumference() {
      return 2 * Math.PI * 55;
    }
  },
  methods: {
    animateCircle() {
      var $statCircle = document.querySelectorAll(".stat-circle circle.progress");

      for (var circle of $statCircle) {
        var circumference = 2 * Math.PI * circle.r.baseVal.value;
        var off = circumference * (1 - parseFloat(circle.dataset.percentage) / 100);

        gsap.to(circle, {
          duration: 0.4,
          strokeDashoffset: off,
          rotation: -90,
          transformOrigin: "50% 50%"
        });
      }
    },
  }
}
</script>

<template>
  <svg class="stat-circle" width="125" height="125"> // Ändert die Breite und Höhe von 100 auf 150
    <circle class="bg" cx="60" cy="60" r="55"></circle> // Ändert den Radius von 40 auf 65
    <circle class="progress" cx="60" cy="60" r="55" :stroke-dasharray="circumference" :stroke-dashoffset="circumference" :data-percentage="percentage"></circle> // Fügt die transform-origin und transform Eigenschaften hinzu
    <text x="50%" y="50%" dy=".3em">{{ percentage }}%</text>
  </svg>
</template>

<style scoped>

.stat-circle circle.bg {
  fill: none;
  stroke: rgba(87, 87, 87, 0.60);
  stroke-width: 4;
}

.stat-circle circle.progress {
  fill: none;
  stroke: #f5c014;
  stroke-width: 7;
  stroke-linecap: round;
}

.stat-circle text {
  font-size: 24px;
  text-anchor: middle;
  fill: #555;
}
</style>
