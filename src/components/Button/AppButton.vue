<template>
  <!-- Can also use this to emit events -->
  <!-- @click.prevent="$emit('clicked', $event)" -->
  <button
    :type="type"
    class="btn"
    :class="[
      themes[theme],
      sizes[size],
      {
        disabled: disabled,
      },
    ]"
    :to="to"
    @click.prevent="clicked"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
<script>
import { reactive } from "vue";
export default {
  props: {
    to: {
      required: false,
      type: Object,
      default() {
        return {
          name: "Home",
        };
      },
    },
    type: {
      required: false,
      type: String,
      default: "button",
    },
    theme: {
      required: false,
      type: String,
      default: "primary",
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false,
    },
    size: {
      required: false,
      type: String,
      default: "normal",
    },
  },
  name: "AppButton",
  setup(props, { emit }) {
    const themes = reactive({
      primary: "btn-primary",
      danger: "btn-danger",
    });
    const sizes = reactive({
      normal: "",
      large: "btn-lg",
    });

    const clicked = (e) => {
      emit("clicked", e);
    };

    return {
      themes,
      sizes,
      clicked,
    };
  },
};
</script>
<style lang="scss" scoped>
.btn {
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  padding: 5px 10px;
}

.btn-danger {
  background: crimson;
  color: white;
}

.btn-primary {
  background: blue;
  color: white;
}

.btn-lg {
  font-size: 20px;
  padding: 12px;
}
.disabled {
  cursor: not-allowed;
}
</style>