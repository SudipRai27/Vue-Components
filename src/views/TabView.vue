<template>
  <div class="tab-page">
    <div class="link">
      <router-link :to="{ name: 'Home' }">Go to main components</router-link>
    </div>
    <Tabs>
      <Tab title="Tab1"> Hello from Tab 1 </Tab>
      <Tab title="Tab2"> Hello from Tab 2 </Tab>
      <Tab title="Tab3"> Hello from Tab 3 </Tab>
      <Tab title="Tab4"> Hello from Tab 4 </Tab>
    </Tabs>
  </div>
</template>
<script>
import Tabs from "@/components/Tab/Tabs";
import Tab from "@/components/Tab/Tab";
export default {
  components: {
    Tabs,
    Tab,
  },
  name: "TabView",
  setup() {},
};
</script>
<style lang="scss" scoped>
.tab-page {
  height: 100vh;
  background-color: wheat;
  width: 100vw;
}
.link {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
</style>
