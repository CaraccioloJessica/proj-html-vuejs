<script>
export default {
}
</script>

<template>
  <!-- Banner top jumbo (shop info)-->
  <div>

  </div>

  <!-- Jumbotron -->
  <div id="jumbo">
    <div class="container">
      <h1>FIND THE BEST ANIMAL SUPPLIES</h1>
      <h2>We know animals are a part of your family, let us help take care of them.</h2>
      <div id="btn">
        <a href="#">
          Learn more about us
        </a>
      </div>
    </div>
  </div>

  <!-- banner bottom jumbo (sales) -->
  <div>

  </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

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
    h2 {
      margin-bottom: 30px;
    }

    h1 {
      font-weight: lighter;
      font-size: 0.7rem;
    }

    h2 {
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
</style>