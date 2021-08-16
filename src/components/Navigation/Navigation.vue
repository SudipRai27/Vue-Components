<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding">
        <img src="@/assets/logo.png" alt="Logo" />
      </div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link :to="{ name: 'Home' }" class="link">Home</router-link>
        </li>
        <li>
          <a href="#" class="link">About</a>
        </li>
        <li>
          <a href="#" class="link">Pages</a>
        </li>
      </ul>
      <div
        class="icon"
        @click.prevent="toggleMobileNav"
        v-show="mobile"
        :class="{ 'icon-active': mobileNav }"
      >
        <i class="fas fa-bars"></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <router-link :to="{ name: 'Home' }" class="link">Home</router-link>
          </li>
          <li>
            <a href="#" class="link">About</a>
          </li>
          <li>
            <a href="#" class="link">Pages</a>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "Navigation",
  setup() {
    const scrolledNav = ref(null);
    const mobile = ref(false);
    let mobileNav = ref(false);
    const windowWidth = ref(null);

    const toggleMobileNav = () => {
      mobileNav.value = !mobileNav.value;
    };

    onMounted(() => {
      // In vue 2 both of the below should be inside created hook
      checkScreen();
      window.addEventListener("resize", checkScreen);
      window.addEventListener("scroll", updateScroll);
    });

    const checkScreen = () => {
      windowWidth.value = window.innerWidth;
      if (windowWidth.value <= 750) {
        return (mobile.value = true);
      }
      mobile.value = false;
      return (mobileNav.value = false);
    };

    const updateScroll = () => {
      const scrollPosition = window.scrollY;
      return scrollPosition > 50
        ? (scrolledNav.value = true)
        : (scrolledNav.value = false);
    };

    return {
      mobile,
      mobileNav,
      scrolledNav,
      toggleMobileNav,
    };
  },
};
</script>
<style lang="scss" scoped>
header {
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #fff;
  padding: 0 10px;

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 99%;
    margin: 0 auto;

    @media (min-width: 1140px) {
      max-width: 1140px;
    }

    ul,
    .link {
      font-weight: 500;
      color: #fff;
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link {
      font-size: 14px;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: #00afea;
        border-color: #00afea;
      }
    }

    .branding {
      display: flex;
      align-items: center;

      img {
        width: 50px;
        transition: 0.5s ease all;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 5px;
      height: 100%;
      cursor: pointer;

      i {
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }

    .icon-active {
      transform: rotate(180deg);
      transition: 0.3s ease all;
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: #fff;
      top: 0;
      left: 0;
      margin: 0px;

      li {
        margin-left: 0px;
        padding-left: 0px;

        .link {
          color: #000;
        }
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}

.scrolled-nav {
  background-color: #000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  nav {
    padding: 8px 0;

    .branding {
      img {
        width: 40px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
    }
  }
}
</style>