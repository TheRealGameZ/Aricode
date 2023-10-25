<template>
  <header>
    <div class="header-container">
      <h1><span class="textPart1">Welcome</span> <span class="textPart2">to my</span><br><span class="textPart3">Site!</span></h1>
    </div>
  </header>
</template>


<script setup>
</script>

<style>
  header {
    background-image: url(assets/background.svg);
    min-height: 100vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: 'Work Sans', sans-serif;
    text-transform: uppercase;
  }

  .header-container{
    padding: 30% 0;
    text-align: center;
  }

  .textPart1{
    opacity: 0;
    animation: myAnim 2.5s ease-in-out 0s 1 normal forwards;
  }

  .textPart2{
    opacity: 0;
    animation: myAnim 2.5s ease-in-out 0s 1 normal forwards;
    animation-delay: 0.6s;
  }

  .textPart3{
    opacity: 0;
    animation: myAnim 2.5s ease-in-out 0s 1 normal forwards;
    animation-delay: 1.2s;
  }

  .textPart4{
    opacity: 0;
    animation: myAnim 2.5s ease-in-out 0s 1 normal forwards;
    animation-delay: 1.2s;
  }

  @keyframes myAnim {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}



</style>