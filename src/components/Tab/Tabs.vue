<template>
  <div class="tabs">
    <ul class="tabs-header">
      <li
        v-for="(title, index) in tabTitles"
        :key="index"
        :class="{ selected: title === selectedTitle }"
        @click="selectedTitle = title"
      >
        {{ title }}
      </li>
    </ul>
    <slot />
  </div>
</template>
<script>
import { ref, provide } from "vue";
export default {
  name: "Tabs",
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTitle = ref(tabTitles.value[0]);
    provide("selectedTitle", selectedTitle); // provides selected title to child without having to send props
    return {
      tabTitles,
      selectedTitle,
    };
  },
};
</script>
<style lang="scss" scoped>
.tabs {
  max-width: 400px;
  margin: 0 auto;

  &-header {
    display: flex;
    margin-bottom: 10px;
    list-style: none;
    padding: 0;
  }

  li {
    width: 80px;
    text-align: center;
    padding: 10px 20px;
    margin-right: 10px;
    background-color: #ddd;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s all ease-out;
  }

  .selected {
    background-color: #0984e3;
    color: #fff;
  }
}
</style>