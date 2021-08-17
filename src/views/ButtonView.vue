<template>
  <div class="btn-container">
    <router-link :to="{ name: 'Home' }">Go to main components page</router-link>
    <br />
    <AppButton title="Button 1"> Primary Normal Button </AppButton>
    <br />
    <br />
    <AppButton
      type="submit"
      theme="danger"
      size="large"
      @click.prevent="clicked"
      title="Button 2"
    >
      Danger Large Click event Button &rarr;
    </AppButton>
    <br />
    <br />
    <AppButton
      theme="danger"
      size="large"
      @click.prevent="clicked"
      disabled
      title="Button 3"
    >
      Disabled Danger Lg Button
    </AppButton>
  </div>
</template>
<script>
import AppButton from "@/components/Button/AppButton";

export default {
  name: "ButtonView",
  components: {
    AppButton,
  },
  setup() {
    const clicked = (e) => {
      console.log(e);
      alert("clicked");
    };
    return {
      clicked,
    };
  },
};
</script>
<style lang="scss" scoped>
.btn-container {
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
