<template>
  <div class="input-container">
    <div class="mt-10">
      <router-link :to="{ name: 'Home' }"
        >Go to main components page</router-link
      >
    </div>
    <div class="m-10">
      <AppInput
        name="name"
        v-model="form.name"
        :value="form.name"
        placeholder="Name"
      ></AppInput>
    </div>
    <div class="m-10">
      <AppInput
        type="email"
        name="email"
        v-model="form.email"
        placeholder="email"
      ></AppInput>
    </div>
    <div class="m-10">
      <AppInput
        type="password"
        name="password"
        v-model="form.password"
      ></AppInput>
    </div>
    {{ form }}
  </div>
</template>
<script>
import AppInput from "../components/Input/AppInput.vue";
import { reactive, ref } from "vue";
export default {
  name: "InputView",
  components: {
    AppInput,
  },
  setup() {
    const value = ref("Sudip Rai");
    const form = reactive({
      name: value.value,
      email: "",
      password: "",
    });

    return {
      form,
    };
  },
};
</script>
<style lang="scss" scoped>
.m-10 {
  margin: 10px;
}

.input-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: cadetblue;
  padding: 20px;
}
</style>
