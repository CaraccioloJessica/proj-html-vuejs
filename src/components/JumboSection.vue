<script>
export default {
}
</script>

<template>
  <!-- Banner top jumbo (shop info)-->
  <div id="banner_top">
    <div class="container">
      <a href="#">
        <span>
          <font-awesome-icon icon="fa-regular fa-map" />
          <strong>International</strong>
          Shipping Services
        </span>
      </a>

      <a href="#">
        <span>
          <font-awesome-icon icon="fa-regular fa-clock" />
          See our
          <strong>store hours</strong>
          and services
        </span>
      </a>

      <a href="#">
        <span>
          <font-awesome-icon icon="fa-solid fa-check" />
          We price match to give you the
          <strong>best deals</strong>
        </span>
      </a>
    </div>
  </div>

  <!-- Jumbotron -->
  <div id="jumbo">
    <div class="container">
      <h1>FIND THE BEST ANIMAL SUPPLIES</h1>
      <p>We know animals are a part of your family, let us help take care of them.</p>
      <div id="btn">
        <a href="#">
          Learn more about us
        </a>
      </div>
    </div>
  </div>

  <!-- banner bottom jumbo (sales) -->
  <div id="banner_bottom">
    <div class="container">
      <img src="img/food-transparent-5-200x112.png" alt="pet-food">

      <p>Get &dollar;25 OFF your first purchase of our homemade pet food!</p>

      <a href="#">Visit the shop</a>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

#banner_top {
  color: $white;
  font-size: 0.7rem;
  height: 50px;
  background-color: $kelp;
  background-image: url('img/bg-transparent-3.png');
  background-size: 220px;
  background-position: top;

  .container {
    height: inherit;
    justify-content: space-around;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }
}

#jumbo {
  height: 550px;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('img/banner-5-2x-scaled.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;

  .container {
    color: $white;
    flex-direction: column;


    h1,
    p {
      margin-bottom: 30px;
    }

    h1 {
      font-weight: lighter;
      font-size: 0.7rem;
    }

    p {
      font-family: "Trocchi", serif;
      font-weight: lighter;
      width: 450px;
      font-size: 2.1rem;
    }

    #btn {
      text-align: center;
      width: 150px;
      font-weight: bold;
      font-size: 0.6rem;
      padding: 8px 10px;
      border-radius: 20px;
      background-color: $white;
      color: #000;
    }
  }
}

#banner_bottom {
  color: $white;
  font-size: 0.9rem;
  height: 90px;
  background-color: $kelp;
  background-image: url('img/bg-transparent-3.png');
  background-size: 220px;
  background-position: top;

  .container {
    width: 750px;
    height: inherit;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
      padding-top: 10px;
      position: absolute;
      bottom: 0;
      left: 0;
      height: inherit;
    }

    p {
      margin-left: 100px;
    }

    a {
      margin-left: 20px;
      color: #bcc2bd;
      text-decoration: underline;
    }
  }
}
</style>