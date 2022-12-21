<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="container">
    <!-- Categorie -->
    <section id="category">
      <h2>Browse by category</h2>
      <p>
        Augue purus et, tincidunt condimentum mauris. At nibh rutrum mi in. Nisi, vitae interdum eleifend dui,
        consequat nulla rhoncus dictum. Viverra
      </p>
    </section>

    <!-- prodotti -->
    <section id="product">
      <div class="card">
        <img src="/img/product-9-300x300.jpg" alt="">
        <span>Bed (1)</span>
      </div>
      <div class="card">
        <img src="/img/product-3-300x300.jpg" alt="">
        <span>Food (6)</span>
      </div>
      <div class="card">
        <img src="/img/product-2-300x300.jpg" alt="">
        <span>Toys (6)</span>
      </div>
      <div class="card">
        <img src="/img/product-4-300x300.jpg" alt="">
        <span>Transport (6)</span>
      </div>
    </section>

    <!-- croccantini -->
    <section id="croc">
      <div class="kibble">
        <h3>Kibble</h3>
        <h5>Dry dog food</h5>
        <img src="/img/food-transparent-18-200x210.png" alt="">
        <div class="btn">
          <a href="#">
            Shop dry food
          </a>
        </div>
      </div>

      <div class="kibble">
        <h3>Moist</h3>
        <h5>Canned dog food</h5>
        <img src="/img/food-transparent-17-200x210.png" alt="">
        <div class="btn">
          <a href="#">
            Shop moist food
          </a>
        </div>
      </div>

      <div class="kibble">
        <h3>Frozen</h3>
        <h5>Freeze-dried dog food</h5>
        <img src="/img/food-transparent-16-200x210.png" alt="">
        <div class="btn">
          <a href="#">
            Shop frozen food
          </a>
        </div>
      </div>
    </section>

    <!-- Banner new arrivals -->
    <section id="new_arrivals">
      <h1>FIND THE BEST ANIMAL SUPPLIES</h1>
      <p>New arrivals weekly</p>
      <div id="btn">
        <a href="#">
          Learn more about us
        </a>
      </div>
    </section>

    <!-- Best sellers -->
    <section>

    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container {
  #category {
    width: inherit;
    padding: 80px 0 50px;
    text-align: center;

    h2 {
      color: $kelp;
      font-family: "Trocchi", serif;
      font-weight: lighter;
      margin-bottom: 20px;
    }

    p {
      margin: 0 auto;
      width: 500px;
      font-size: 0.75rem;
      line-height: 1.5;
    }
  }

  #product {
    width: inherit;
    display: flex;
    gap: 10px;

    .card {
      width: 220px;
      margin-bottom: 80px;
      text-align: center;

      img {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }

  #croc {
    width: inherit;
    display: flex;
    gap: 10px;

    .kibble {
      background-image: url('img/bg-transparent-3.png');
      background-color: $kelp;
      background-repeat: no-repeat;
      background-size: contain;
      width: calc(100% / 3 - 5px);
      padding: 50px;
      text-align: center;
      margin-bottom: 60px;

      h3 {
        color: $white;
        font-family: "Trocchi", serif;
        font-weight: lighter;
        font-size: 1.4rem;
        margin-bottom: 15px;
      }

      h5 {
        color: #599f64;
        margin-bottom: 15px;
      }

      .btn {
        font-size: 0.6rem;
        margin: 0 auto;
        width: 100px;
        color: $white;
        background-color: $leaf;
        padding: 8px 0;
        border-radius: 20px;
      }
    }
  }

  #new_arrivals {
    color: $white;
    width: inherit;
    height: 350px;
    margin-bottom: 50px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/img/banner-3-2x-scaled.jpg');
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-weight: lighter;
      font-size: 0.7rem;
    }

    p {
      margin: 20px 0;
      font-family: "Trocchi", serif;
      font-weight: lighter;
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
</style>