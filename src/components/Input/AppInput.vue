<template>
  <div>
    <input
      :placeholder="placeHolder"
      :type="inputType"
      :name="name"
      :id="name"
      value="1"
      v-model="input"
      class="form-control"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <a
      href="#"
      v-if="type === 'password'"
      @click.prevent="passwordRevealed = !passwordRevealed"
    >
      <br />
      {{ passwordRevealed ? "Hide" : "Show" }} Password
    </a>
  </div>
</template>
<script>
import { ref, computed } from "vue";
export default {
  name: "AppInput",
  props: {
    name: {
      required: true,
      type: String,
    },
    type: {
      required: false,
      type: String,
      default: "text",
    },
    value: {
      required: false,
      type: String,
      default: "",
    },
  },
  setup(props, { attrs }) {
    const passwordRevealed = ref(false);
    const placeHolder = ref(attrs.placeholder);
    const input = ref(props.value);
    const inputType = computed(() => {
      return passwordRevealed.value ? "text" : props.type;
    });

    return {
      inputType,
      passwordRevealed,
      input,
      attrs,
      placeHolder,
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
