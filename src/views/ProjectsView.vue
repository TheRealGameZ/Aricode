<template>
    <div class="row">
        <header class="text-center">
        <h2>Projects</h2>
        <div class="horizontalLine"></div>
        </header>
  </div>
</template>
<script>
 export default {
  mounted() {
    let element = document.getElementById('headerContainer');
    element.classList.add('headerHeightSmall');
  },
 }
</script>