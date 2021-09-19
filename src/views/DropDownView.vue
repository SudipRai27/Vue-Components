<template>
  <div class="dropdown flex items-center justify-center">
    <div
      class="
        container
        mx-auto
        p-6
        flex
        items-center
        flex-col
        justify-center
        gap-3
      "
    >
      <router-link :to="{ name: 'Home' }">Go to components page</router-link>
      <label for="">Order By</label>
      <div>{{ selected }}</div>
      <DropDown :items="items" :selected="selected" @change="itemChanged">
        <template v-slot:current="{ current }">
          <template v-if="current && current.slug">
            Order By {{ current.title }}
          </template>
          <template v-else>Please choose</template>
        </template>

        <template v-slot:item="{ item, current, select }">
          <CustomDropDownItem
            v-show="item.slug"
            :item="item"
            :selected="current.slug === item.slug"
            @click.prevent="select(item)"
          />
        </template>
      </DropDown>
    </div>
  </div>
</template>
<script>
import DropDown from "@/components/DropDown/DropDown";
import CustomDropDownItem from "@/components/DropDown/CustomDropDownItem";
export default {
  components: {
    DropDown,
    CustomDropDownItem,
  },

  data() {
    return {
      selected: null,
      items: [
        { title: "Please choose", slug: null },
        { title: "Price High to Low", slug: "price-desc" },
        { title: "Price Low to High", slug: "price-asc" },
      ],
    };
  },

  methods: {
    itemChanged(item) {
      this.selected = item.slug;
    },
  },
};
</script>
<style scoped>
.dropdown {
  @apply bg-gray-500;
  height: 100vh;
}
</style>