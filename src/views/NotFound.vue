<template>
  <div class="error-page">
    <h1>Page not found</h1>
    <div>
      <router-link to="/">Go to home</router-link>
    </div>
  </div>
</template>
<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>