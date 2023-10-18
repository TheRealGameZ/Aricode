<template>
  <nav>
      <router-link to="/"><a>Home</a></router-link>
      <router-link to="/skills"><a>Skills</a></router-link>
      <router-link to="/projects"><a>Projects</a></router-link>
      <router-link to="/skills"><a>Contact</a></router-link>
  </nav>
  <router-view/>
</template>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  nav a {
    margin: 2rem;
  }

</style>