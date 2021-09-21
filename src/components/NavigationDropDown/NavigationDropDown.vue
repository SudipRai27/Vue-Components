<template>
  <nav>
    <div class="menu-item">
      <a href="#">Home</a>
    </div>
    <div class="menu-item">
      <a href="#">About</a>
    </div>
    <DropDown title="Services" :items="services"></DropDown>
    <div class="menu-item">
      <a href="#">Contact</a>
    </div>
  </nav>
</template>
<script>
import DropDown from "./DropDown.vue";
export default {
  name: "NavigationDropDown",
  components: {
    DropDown,
  },
  data() {
    return {
      services: [
        {
          title: "Web",
          link: "#",
        },
        {
          title: "Design",
          link: "#",
        },
        {
          title: "Videos",
          link: "#",
        },
      ],
    };
  },
};
</script>
<style>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-item.active,
.menu-item:hover {
  background-color: #444;
  border-bottom-color: #ff5858;
}

.menu-item {
  color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

.menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>