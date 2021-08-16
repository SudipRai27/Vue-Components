<template>
  <div class="snackbar-container">
    <button @click.prevent="triggerSnack" v-if="!snack">
      Trigger SnackBar
    </button>
    <br />
    <router-link to="/">Go to main components page</router-link>
    <SnackBar></SnackBar>
  </div>
</template>
<script>
import SnackBar from "@/components/SnackBar/SnackBar";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SnackBarView",
  components: {
    SnackBar,
  },
  computed: {
    ...mapGetters({
      snack: "snack/snack",
    }),
  },
  methods: {
    ...mapActions({
      trigger: "snack/snack",
    }),
    triggerSnack() {
      this.trigger({
        text: "This is a snack", //additional options of delay and time available
      });
    },
  },
};
</script>
<style scoped>
.snackbar-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: darkcyan;
  width: 100%;
  height: 100vh;
}

button {
  cursor: pointer;
}
</style>
