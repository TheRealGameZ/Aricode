<script>
  import QrcodeVue from 'qrcode.vue'
  export default {
    props: ['title', 'content'],
    components: {
      QrcodeVue
    },
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
            <qrcode-vue :value="content"></qrcode-vue>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>