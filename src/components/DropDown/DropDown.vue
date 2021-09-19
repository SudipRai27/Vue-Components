<template>
  <div class="relative" v-click-outside="hide">
    <a
      @click.prevent="open = !open"
      href=""
      class="
        text-sm
        inline-flex
        bg-gray-300
        h-10
        px-4
        rounded
        text-center
        items-center
        justify-center
        leading-none
        text-gray-600
      "
    >
      <slot name="current" :current="current">
        {{ current.title }}
      </slot>
    </a>
    <ul
      v-show="open"
      class="bg-white shadow-xl absolute rounded overflow-hidden z-50 w-40 mt-2"
    >
      <li v-for="(item, index) in items" :key="index">
        <slot name="item" :item="item" :current="current" :select="select">
          <DropDownItem
            :item="item"
            :selected="current.slug === item.slug"
            @click.prevent="select(item)"
          />
        </slot>
      </li>
    </ul>
  </div>
</template>
<script>
import DropDownItem from "./DropDownItem.vue";
import vClickOutside from "click-outside-vue3";
export default {
  props: {
    items: {
      required: true,
      type: Array,
    },
    selected: {
      required: false,
      type: String,
    },
  },

  components: {
    DropDownItem,
  },

  directives: {
    clickOutside: vClickOutside.directive,
  },

  data() {
    return {
      open: false,
    };
  },

  computed: {
    current() {
      return this.items.find((i) => i.slug === this.selected);
    },
  },

  methods: {
    select(item) {
      this.$emit("change", item);
      this.hide();
    },

    hide() {
      this.open = false;
    },
  },
};
</script>
 