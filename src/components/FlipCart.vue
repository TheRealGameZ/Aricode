<script>
  export default {
    props: ['title', 'content']
  }
</script>

<template>
  <div class="cardFlipEffect">
    <div class="cardFlipAnimation">
      <div class="cardFrontStyle">
        <!-- front content -->
        <div class="cardBasicStyling">
          <div class="card-block">
            <h4>{{ title }}</h4>
          </div>
        </div>
      </div>
      <div class="cartBackStyle">
        <!-- back content -->
        <div class="cardBasicStyling">
          <div class="card-block">
            <p class="card-text">{{ content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>