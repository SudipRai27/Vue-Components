<template>
  <nav
    class="nav"
    :class="{
      'nav--pinned': pinned,
    }"
  >
    nav
  </nav>
</template>
<script>
export default {
  name: "AutoHidingNavigation",

  data() {
    return {
      pinned: true,
    };
  },

  methods: {
    addScrollListener() {
      let pxTrigger = 0;
      const menuHeight = 80;
      document.addEventListener("scroll", () => {
        const pxFromTop = window.scrollY || window.pageYOffset;
        if (pxFromTop > menuHeight) {
          this.pinned = pxFromTop < pxTrigger;
          pxTrigger = pxFromTop;
        } else {
          this.pinned = true;
        }
      });
    },
  },

  mounted() {
    this.addScrollListener();
  },
};
</script>
<style scoped>
.nav {
  background-color: rgb(110, 97, 97);
  position: fixed;
  width: 100%;
  height: 80px;
  top: -80px;
  transition: all 200ms ease;
}

.nav--pinned {
  top: 0px;
}
</style>    