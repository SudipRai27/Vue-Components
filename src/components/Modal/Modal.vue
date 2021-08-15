<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal" @click="close">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner" @click.stop="">
          <span @click="close" class="icon">
            <i class="far fa-times-circle"></i>
          </span>
          <!-- Modal content -->
          <slot />
          <button @click="close">Close</button>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    modalActive: {
      required: true,
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return {
      close,
    };
  },
};
</script>
<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgb(255, 255, 255, 0.7);
}

.modal-inner {
  position: absolute;
  max-width: 640px;
  width: 80%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: white;
  padding: 64px 16px;
}

.icon {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
}

.icon:hover {
  color: crimson;
}

button {
  padding: 10px 10px;
  border: none;
  font-size: 16px;
  background-color: crimson;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}

.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.5s ease;
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active,
.modal-animation-inner-leave-active {
  transition: all 0.5s ease;
}

.modal-animation-inner-enter-from,
.modal-animation-inner-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>