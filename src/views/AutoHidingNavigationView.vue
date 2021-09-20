<template>
  <div>
    <AutoHidingNavigation></AutoHidingNavigation>
    <div class="content">
      <div v-for="x in 1000" :key="x">Content</div>
    </div>
  </div>
</template>
<script>
import AutoHidingNavigation from "@/components/AutoHidingNavigation/AutoHidingNavigation.vue";
export default {
  components: {
    AutoHidingNavigation,
  },
  name: "AutoHidingNavigationView",
};
</script>
<style scoped>
.content {
  padding-top: 80px;
}
</style>