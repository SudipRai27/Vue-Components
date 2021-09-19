<template>
  <a
    href="#"
    class="block p-2 px-4 text-sm text-gray-800 hover:bg-gray-100"
    :class="{
      'bg-gray-200': selected,
    }"
    @click.prevent="$emit('click', $event)"
  >
    {{ item.title }} (custom)
  </a>
</template>
<script>
export default {
  props: {
    item: {
      required: true,
      type: Object,
    },
    selected: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
};
</script>