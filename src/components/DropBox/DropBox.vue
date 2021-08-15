<template>
  <div
    class="dropzone"
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="drop"
    :class="{ 'active-dropzone': active }"
  >
    <span>Drop or drag file</span>
    <span>OR</span>
    <label for="dropzoneFile">Select File</label>
    <input
      type="file"
      ref="files"
      id="dropzoneFile"
      style="display: none"
      @input="handleFiles"
      multiple
    />
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "DropBox",
  setup(props, { emit }) {
    const active = ref(false);
    const files = ref([]);

    const toggleActive = () => {
      active.value = !active.value;
    };

    const drop = (e) => {
      toggleActive();
      emit("filesSelected", e.dataTransfer.files);
    };

    const handleFiles = () => {
      emit("filesSelected", files.value.files);
    };

    return {
      files,
      active,
      toggleActive,
      drop,
      handleFiles,
    };
  },
};
</script>
<style scoped>
.dropzone {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  row-gap: 16px;
  border: 2px dashed #41b883;
  background-color: #fff;
  transition: 0.3s ease all;
}

label {
  padding: 8px 12px;
  color: #fff;
  background-color: #41b883;
  cursor: pointer;
  transition: 0.3s ease all;
}

.active-dropzone {
  color: #fff;
  border-color: #fff;
  background-color: #41b883;
}

.active-dropzone label {
  background: #fff;
  color: #41b883;
}
</style>