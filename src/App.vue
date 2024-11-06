<!-- SCRIPT -->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<!-- HTML -->
<template>
  <div class="app-container">
    <RouterView />
  </div>
</template>

<!-- CSS -->
<style>
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e;
}

#app {
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
}

.app-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
