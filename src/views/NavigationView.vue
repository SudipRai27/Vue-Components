<template>
  <div class="app">
    <Navigation />
    <div class="home">
      <section class="hero">
        <div class="hero-text container">
          <h4>Vue Responsive Nav Menu</h4>
          <h2>
            With Vue <br />
            Animations
          </h2>
        </div>
      </section>
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        aliquid ratione fugiat illo magni eum inventore vitae vero veniam sunt?
        Molestiae, quis sapiente facilis enim cumque deleniti eveniet iusto
        provident. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Molestiae aliquid ratione fugiat illo magni eum inventore vitae vero
        veniam sunt? Molestiae, quis sapiente facilis enim cumque deleniti
        eveniet iusto provident. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Molestiae aliquid ratione fugiat illo magni eum
        inventore vitae vero veniam sunt? Molestiae, quis sapiente facilis enim
        cumque deleniti eveniet iusto provident. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Molestiae aliquid ratione fugiat illo
        magni eum inventore vitae vero veniam sunt? Molestiae, quis sapiente
        facilis enim cumque deleniti eveniet iusto provident. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Molestiae aliquid ratione fugiat
        illo magni eum inventore vitae vero veniam sunt? Molestiae, quis
        sapiente facilis enim cumque deleniti eveniet iusto provident. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid
        ratione fugiat illo magni eum inventore vitae vero veniam sunt?
        Molestiae, quis sapiente facilis enim cumque deleniti eveniet iusto
        provident. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Molestiae aliquid ratione fugiat illo magni eum inventore vitae vero
        veniam sunt? Molestiae, quis sapiente facilis enim cumque deleniti
        eveniet iusto provident. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Molestiae aliquid ratione fugiat illo magni eum
        inventore vitae vero veniam sunt? Molestiae, quis sapiente facilis enim
        cumque deleniti eveniet iusto provident. cumque deleniti eveniet iusto
        provident. cumque deleniti eveniet iusto provident. cumque deleniti
        eveniet iusto provident. cumque deleniti eveniet iusto provident. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid
        ratione fugiat illo magni eum inventore vitae vero veniam sunt?
        Molestiae, quis sapiente facilis enim cumque deleniti eveniet iusto
        provident. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Molestiae aliquid ratione fugiat illo magni eum inventore vitae vero
        veniam sunt? Molestiae, quis sapiente facilis enim cumque deleniti Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid
        ratione fugiat illo magni eum inventore vitae vero veniam sunt?
        Molestiae, quis sapiente facilis enim cumque deleniti eveniet iusto
        provident. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Molestiae aliquid ratione fugiat illo magni eum inventore vitae vero
        veniam sunt? Molestiae, quis sapiente facilis enim cumque deleniti Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid
        ratione fugiat illo magni eum inventore vitae vero veniam sunt?
        Molestiae, quis sapiente facilis enim cumque deleniti eveniet iusto
        provident. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Molestiae aliquid ratione fugiat illo magni eum inventore vitae vero
        veniam sunt? Molestiae, quis sapiente facilis enim cumque deleniti
        veniam sunt? Molestiae, quis sapiente facilis enim cumque deleniti Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid
        ratione fugiat illo magni eum inventore vitae vero veniam sunt?
        Molestiae, quis sapiente facilis enim cumque deleniti eveniet iusto
        provident. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Molestiae aliquid ratione fugiat illo magni eum inventore vitae vero
        veniam sunt? Molestiae, quis sapiente facilis enim cumque deleniti
        veniam sunt? Molestiae, quis sapiente facilis enim cumque deleniti Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid
        ratione fugiat illo magni eum inventore vitae vero veniam sunt?
        Molestiae, quis sapiente facilis enim cumque deleniti eveniet iusto
        provident. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Molestiae aliquid ratione fugiat illo magni eum inventore vitae vero
        veniam sunt? Molestiae, quis sapiente facilis enim cumque deleniti
        veniam sunt? Molestiae, quis sapiente facilis enim cumque deleniti Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid
        ratione fugiat illo magni eum inventore vitae vero veniam sunt?
        Molestiae, quis sapiente facilis enim cumque deleniti eveniet iusto
        provident. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Molestiae aliquid ratione fugiat illo magni eum inventore vitae vero
        veniam sunt? Molestiae, quis sapiente facilis enim cumque deleniti
        veniam sunt? Molestiae, quis sapiente facilis enim cumque deleniti Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid
        ratione fugiat illo magni eum inventore vitae vero veniam sunt?
        Molestiae, quis sapiente facilis enim cumque deleniti eveniet iusto
        provident. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Molestiae aliquid ratione fugiat illo magni eum inventore vitae vero
        veniam sunt? Molestiae, quis sapiente facilis enim cumque deleniti
      </section>
    </div>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation/Navigation";
export default {
  components: {
    Navigation,
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.app {
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}

.hero {
  background-image: url("../assets/hero-bg.png");
  background-attachment: fixed;
  position: relative;
  height: 100vh;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .hero-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }
    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 80px;
      }
    }
  }
}
</style>
