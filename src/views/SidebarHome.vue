<template>
  <Sidebar></Sidebar>
  <div :style="{ 'margin-left': sidebarWidth }">
    <div class="content">
      <div class="header">Home</div>
      <div class="main-content">Welcome to Home</div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar/Sidebar";
import { sidebarWidth } from "@/components/Sidebar/state";
export default {
  components: {
    Sidebar,
  },
  setup() {
    return {
      sidebarWidth,
    };
  },
};
</script>
<style scoped>
.content {
  background: #eceaea;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
}

.header {
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
}

.main-content {
  padding: 10px 14px;
}
</style>
