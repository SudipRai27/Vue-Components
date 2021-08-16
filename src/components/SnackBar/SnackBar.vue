<template>
  <div class="snack">
    <transition name="snack">
      <div class="snack-text" v-if="snack">
        {{ snack }}
      </div>
    </transition>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "SnackBar",
  computed: {
    ...mapGetters({
      snack: "snack/snack",
    }),
  },
};
</script>
<style scoped>
.snack {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.snack-text {
  margin-top: 20px;
  background-color: cornflowerblue;
  color: #fff;
  padding: 4px 16px;
  border-radius: 6px;
}

.snack-enter-active,
.snack-leave-active {
  transition: all 0.3s ease-in-out;
}

.snack-enter-from {
  transform: translateY(-24px);
}

.snack-leave-to {
  transform: translateY(-24px);
}
</style>
