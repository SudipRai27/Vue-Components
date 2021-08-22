<template>
  <section class="nav">
    <div class="logo">
      <img
        height="50px"
        src="https://robohash.org/1725517800aa172dad04eb4bf3560394?set=set4&bgset=&size=400x400"
        alt="image"
        class="avatar"
      />
    </div>
    <div class="nav-menu">
      <ul class="nav-menu-list">
        <li class="nav-list-item">About Me</li>
        <li class="nav-list-item">Git Hub</li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: "MobileNav",
  setup() {},
};
</script>
<style lang="scss" scoped>
.nav {
  background: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .logo {
    margin: 20px auto;
  }

  .nav-menu {
    width: 100%;
  }
}

.nav-menu-list {
  list-style: none;
  padding: 0;
  display: flex;
  margin: 0;
  color: white;

  li {
    width: 50%;
    text-align: center;
    background: #555;
    padding: 10px 0;
    cursor: pointer;
    transition: background 300ms ease-in-out;

    &:hover {
      background: #333;
    }
    &:first-of-type {
      border-bottom: 5px solid #222;
    }
  }
}
</style>
