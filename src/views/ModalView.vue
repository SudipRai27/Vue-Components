<template>
  <div class="modal-container">
    <Modal :modalActive="modalActive" @close="toggleModal">
      <div class="modal-content">
        <h3>This is a modal header</h3>
        <p>This is modal message</p>
      </div>
    </Modal>
    <button type="button" @click="toggleModal">Open Modal</button>
  </div>
</template>
<script>
import Modal from "@/components/Modal/Modal";
import { ref } from "@vue/reactivity";
export default {
  components: {
    Modal,
  },
  name: "ModalView",
  setup() {
    const modalActive = ref(false);

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    return {
      modalActive,
      toggleModal,
    };
  },
};
</script>
<style scoped>
.modal-container {
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: rgb(0, 176, 234, 0.5);
  justify-content: center;
  align-items: center;
}

.modal-content {
  display: flex;
  flex-direction: column;
}
</style>