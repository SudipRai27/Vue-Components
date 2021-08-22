<template>
  <DesktopNav id="desktop-nav"></DesktopNav>
  <MobileNav id="mobile-nav"></MobileNav>
  <div class="view-container">
    <div class="about-card">
      <div class="card-title">
        <img
          height="50px"
          src="https://robohash.org/1725517800aa172dad04eb4bf3560394?set=set4&bgset=&size=400x400"
          alt="image"
          class="avatar"
        />
        <div class="title-text-content">
          <p>About me</p>
          <h2>Johnathan Doe</h2>
        </div>
      </div>
      <div class="card-content">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          autem quidem, vitae omnis dolores pariatur ullam doloribus laborum.
          Doloribus placeat earum natus unde possimus. Doloribus qui animi
          impedit assumenda dolore! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Necessitatibus optio officia minus nesciunt, error
          aliquam voluptatibus labore ab distinctio itaque explicabo facilis,
          fuga natus temporibus excepturi qui pariatur modi similique.
        </p>
        <table>
          <tr>
            <th>Requirement</th>
            <th>Solution</th>
          </tr>
          <tr>
            <td>Design</td>
            <td>Photoshop, Figma, Canva, Adobe XD</td>
          </tr>
          <tr>
            <td>Front end</td>
            <td>React.js, Vue.js, HTML, CSS, Javascript</td>
          </tr>
          <tr>
            <td>ML</td>
            <td>ML5, TensorFlow, Algorithm Design</td>
          </tr>
          <tr>
            <td>Shop</td>
            <td>Stripe, Payfast, E-commerce, CMS</td>
          </tr>
        </table>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit
          aut similique molestiae cumque, aliquam expedita necessitatibus, minus
          iure libero at tempora? Distinctio sapiente aliquid harum eos. Dicta,
          fugiat ipsa?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
          laboriosam odit quis qui sit repellendus, maxime molestias architecto
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import DesktopNav from "@/components/About/DesktopNav";
import MobileNav from "@/components/About/MobileNav";
export default {
  name: "About",
  components: {
    DesktopNav,
    MobileNav,
  },
  setup() {},
};
</script>
<style scoped lang="scss">
.view-container {
  width: 79vw;
  padding: 1.5em;
  margin-left: 20vw;
  box-sizing: border-box;
  min-height: 100vh;
}

.about-card {
  background: #333;
  padding: 3em;
  border-radius: 10px;
  color: white;

  .card-title {
    display: flex;
    align-items: center;
    background: #222;
    border-radius: 10px;

    .avatar {
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-radius: 50%;
      margin: 0 30px;
    }
  }
  .title-text-content {
    p {
      margin-bottom: 0;
      color: rgb(210, 210, 210);
    }
    h2 {
      margin-top: 0;
    }
  }
}

.card-content {
  line-height: 1.5;
  margin: 30px auto;
}

table {
  width: 100%;
  border-spacing: 0px;
  tr th,
  tr td {
    border: 1px solid white;
    border-top: none;
    padding: 10px;
    text-align: center;

    &:first-of-type {
      border-left: none;
    }

    &:nth-of-type(2) {
      border-right: none;
    }
  }
}

#mobile-nav {
  display: none;
}

@media screen and (max-width: 1096px) {
  .view-container {
    width: 100%;
    margin-left: 0;
  }

  #desktop-nav {
    display: none;
  }

  #mobile-nav {
    display: flex;
  }
}
</style>
