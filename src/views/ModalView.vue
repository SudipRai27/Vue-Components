<template>
  <div class="modal-container">
    <Modal :modalActive="modalActive" @close="toggleModal">
      <template v-slot:header>
        <h3>This is a modal header</h3>
      </template>
      <template v-slot:default>
        <p>This is modal body</p>
      </template>
      <template v-slot:footer>
        <button class="modal-button" @click="toggleModal">Close</button>
      </template>
    </Modal>
    <button type="button" @click="toggleModal">Open Modal</button>
    <br />
    <router-link to="/">Go to main component page</router-link>
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
  flex-direction: column;
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

.modal-button {
  padding: 10px 10px;
  border: none;
  font-size: 16px;
  background-color: crimson;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}
</style>
