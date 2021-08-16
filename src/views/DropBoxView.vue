<template>
  <div class="dropzone-container">
    <router-link to="/">Go to Components Page</router-link>
    <h1>Drop Zone</h1>
    <DropBox @filesSelected="handleFiles" />
    <template v-if="files">
      <span class="file-info" v-for="(file, index) in files" :key="index">
        File: {{ file.name }}
      </span>
    </template>
  </div>
</template>
<script>
import DropBox from "@/components/DropBox/DropBox";
import { ref } from "@vue/reactivity";
export default {
  name: "DropBoxView",
  components: {
    DropBox,
  },
  setup() {
    let files = ref([]);

    const handleFiles = (selectedFiles) => {
      files.value = selectedFiles;
    };
    return {
      files,
      handleFiles,
    };
  },
};
</script>
<style scoped>
.dropzone-container {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
}

h1 {
  font-size: 40px;
  margin-bottom: 32px;
}

.file-info {
  margin-top: 32px;
}
</style>
