<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1 class="sidebar-header">
      <transition name="fade">
        <div v-show="collapsed">
          <div>V</div>
          <div>S</div>
        </div>
      </transition>
      <transition name="fade">
        <div v-show="!collapsed">Vue Sidebar</div>
      </transition>
    </h1>
    <SiderbarLink to="sidebar-home" icon="fas fa-users"> Home </SiderbarLink>
    <SiderbarLink to="sidebar-users" icon="fas fa-users"> Users </SiderbarLink>
    <SiderbarLink to="/" icon="fas fa-door-open">
      Go to main page
    </SiderbarLink>
    <span
      class="collapse-icon"
      @click="toggleSidebar"
      :class="{ 'rotate-180': collapsed }"
    >
      <i class="fas fa-angle-double-left"></i>
    </span>
  </div>
</template>
<script>
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
import SiderbarLink from "./SidebarLink";
import { onMounted } from "vue";
export default {
  components: {
    SiderbarLink,
  },
  setup() {
    onMounted(() => {
      window.addEventListener("resize", checkScreenSize);
      checkScreenSize();
    });

    const checkScreenSize = () => {
      return window.innerWidth <= 550
        ? (collapsed.value = true)
        : (collapsed.value = false);
    };

    return {
      collapsed,
      toggleSidebar,
      sidebarWidth,
    };
  },
};
</script>
<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>
<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}

.collapse-icon {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
