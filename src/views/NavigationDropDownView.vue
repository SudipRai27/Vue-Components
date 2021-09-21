<template>
  <div>
    <header>
      <NavigationDropDown></NavigationDropDown>
    </header>
    <div class="py-3">
      <router-link to="/">Go to main component page</router-link>
    </div>
  </div>
</template>
<script>
import NavigationDropDown from "@/components/NavigationDropDown/NavigationDropDown.vue";
export default {
  name: "VueNavigationDropDownView",
  components: {
    NavigationDropDown,
  },
};
</script>
<style scoped>
header {
  width: 100vw;
  background: #222;
  padding: 15px;
}
</style>