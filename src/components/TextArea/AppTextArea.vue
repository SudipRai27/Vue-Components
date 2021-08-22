<template>
  <div>
    <textarea
      :name="name"
      :id="name"
      :placeholder="attrs.placeholder"
      class="form-control"
      v-model="input"
      :rows="rows"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>
</template>
<script>
import { computed, ref } from "vue";
export default {
  name: "Textarea",
  props: {
    name: {
      required: true,
      type: String,
    },
    value: {
      required: false,
      type: String,
    },
  },
  setup(props, { attrs }) {
    const input = ref(props.value ?? "");
    const rows = computed(() => {
      return Math.max(5, input.value.split("\n").length);
    });
    return {
      attrs,
      props,
      input,
      rows,
    };
  },
};
</script>
<style lang="scss" scoped>
.form-control {
  padding: 5px 8px;
  outline: none;
  border: none;
}
</style>
