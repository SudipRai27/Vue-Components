<template>
  <div class="tab-content" v-show="title == selectedTitle">
    <slot />
  </div>
</template>
<script>
import { inject } from "vue";
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
  },
  name: "Tab",
  setup() {
    const selectedTitle = inject("selectedTitle");

    return {
      selectedTitle,
    };
  },
};
</script>
<style lang="scss" scoped>
.tab-content {
  min-height: 400px;
  padding: 20px;
  border: 1px dashed rgb(207, 74, 74);
  border-radius: 5px;
}
</style>