<template>
  <nav>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <router-link to="/"><a class="nav-link">Home</a></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/skills"><a class="nav-link">Skills</a></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/projects"><a class="nav-link">Projects</a></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/skills"><a class="nav-link">Contact</a></router-link>
      </li>
    </ul>
    <button class="btn btn-primary" type="button">lwakd</button>

  </nav>
  <router-view/>
</template>
<script setup>
</script>