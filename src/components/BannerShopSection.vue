<script>
export default {

}
</script>

<template>
  <section id="banner">
    <div class="popular">
      <h3>FIND THE BEST ANIMAL SUPPLIES</h3>
      <p>Popular accessories</p>
      <div id="btn">
        <a href="#">
          View all toys accessories
        </a>
      </div>
    </div>

    <div class="new">
      <h3>FIND THE BEST FOOD</h3>
      <p>New food arrival</p>
      <div id="btn">
        <a href="#">
          View all food products
        </a>
      </div>
    </div>
  </section>

  <section id="kelp">
    <div class="container">
      <div id="icons">
        <font-awesome-icon icon="fa-solid fa-truck" />
        <span>Free worldwide deliveries</span>
      </div>

      <div id="icons">
        <font-awesome-icon icon="fa-regular fa-map" />
        <span>Find stores near you</span>
      </div>

      <div id="icons">
        <font-awesome-icon icon="fa-solid fa-dollar" />
        <span>Best prices guaranteed</span>
      </div>

      <div id="icons">
        <font-awesome-icon icon="fa-regular fa-credit-card" />
        <span>All credit card accepted</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

#banner {
  display: flex;

  .popular,
  .new {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: $white;
    width: 50%;
    height: 330px;
    background-size: cover;

    h3 {
      font-weight: lighter;
      font-size: 0.7rem;
    }

    p {
      margin: 20px 0;
      font-family: "Trocchi", serif;
      font-weight: lighter;
      font-size: 1.6rem;
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

  .popular {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url('img/banner-8-2x.jpg');
  }

  .new {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url('img/banner-9-2x.jpg');
  }
}

#kelp {
  background-color: $kelp;
  height: 200px;
  background-image: url('img/bg-transparent-3.png');
  background-size: 200px;
  background-repeat: repeat-x;
  color: $white;

  .container {
    height: inherit;
    align-items: center;
    gap: 32px;

    #icons {
      width: 200px;
      text-align: center;

      svg {
        width: inherit;
        font-size: 2rem;
        margin-bottom: 15px;
      }

      span {
        color: $grey;
        font-size: 0.75rem;
      }
    }
  }
}
</style>