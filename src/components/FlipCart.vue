<script>
  export default {
    props: ['title', 'content']
  }
</script>

<template>
  <div class="card-flip">
    <div class="flip">
      <div class="front">
        <!-- front content -->
        <div class="card">
          <div class="card-block">
            <h4>{{ title }}</h4>
          </div>
        </div>
      </div>
      <div class="back">
        <!-- back content -->
        <div class="card">
          <div class="card-block">
            <p class="card-text">{{ content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-flip {
  perspective: 1000px;
  &:hover .flip,
  &.hover .flip {
    transform: rotateY(180deg);
  }
}

.card {
  width: 250px;
  height: 250px;
  background-size: cover;
  border-radius: 15px;
  border: 3px solid rgba(87, 87, 87, 0.40);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F5F5F5;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.20);
}

.card-flip,
.front,
.back {
  width: 250px;
  height: 250px;
}

.flip {
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

.front,
.back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.front {
  z-index: 2;
  transform: rotateY(0deg);
}

.back {
  transform: rotateY(180deg);
}
</style>
