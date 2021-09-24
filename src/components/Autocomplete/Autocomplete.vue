<template>
  <div class="autocomplete-container flex justify-center items-center">
    <div class="bg-red-300 absolute inset-0 z-0" @click="modal = false"></div>
    <div class="flex flex-col items-center">
      <router-link to="/" class="z-10">Go to main component page</router-link>
      <input
        type="text"
        class="bg-gray-300 px-4 py-2 z-10"
        v-model="state"
        autocomplete="off"
        @focus="modal = true"
      />
      <div v-if="filteredStates.length && modal" class="z-10">
        <ul class="w-48 bg-gray-800 text-white">
          <li
            v-for="(state, index) in filteredStates"
            :key="index"
            class="py-2 border-b cursor-pointer text-center"
            @click="setState(state)"
          >
            {{ state }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Autocomplete",
  data() {
    return {
      state: "",
      states: ["Florida", "Alabama", "Texas", "Alaska"],
      modal: false,
    };
  },

  computed: {
    filteredStates() {
      return this.states.filter((state) => {
        return state.toLowerCase().startsWith(this.state.toLowerCase());
      });
    },
  },

  methods: {
    setState(state) {
      this.modal = false;
      this.state = state;
    },
  },
};
</script>
<style scoped>
.autocomplete-container {
  height: 100vh;
}
</style>