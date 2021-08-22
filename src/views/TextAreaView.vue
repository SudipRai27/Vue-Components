<template>
  <div class="textarea-container">
    <router-link :to="{ name: 'Home' }">Go to main components page</router-link>
    <AppTextArea
      name="bio"
      placeholder="Text area"
      v-model="text"
      :value="text"
    ></AppTextArea>
    {{ text }}
    <AppTextArea
      name="text"
      placeholder="Text area 2"
      v-model="number"
    ></AppTextArea>
    {{ number }}
  </div>
</template>
<script>
import { ref } from "vue";
import AppTextArea from "@/components/TextArea/AppTextArea";
export default {
  name: "TextAreaView",
  components: {
    AppTextArea,
  },
  setup() {
    const text = ref("text area 1");
    const number = ref("");
    return {
      text,
      number,
    };
  },
};
</script>
<style lang="scss" scoped>
.textarea-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  row-gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: darkkhaki;
}
</style>
