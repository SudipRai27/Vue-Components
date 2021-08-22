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
  name: "DesktopNav",
  setup() {},
};
</script>
<style lang="scss" scoped>
.nav {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;

  .logo {
    margin: 100px auto;
  }
  .nav-menu {
    color: white;
  }
}

.nav-menu-list {
  list-style: none;
  padding: 0;

  .nav-list-item {
    background: #222;
    padding: 10px 20px;
    text-align: center;
    margin: 10px auto;
    cursor: pointer;

    &:hover {
      color: burlywood;
    }
  }
}
</style>
