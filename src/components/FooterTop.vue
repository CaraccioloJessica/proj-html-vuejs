<script>
export default {
}
</script>

<template>
  <section id="kelp">
    <div class="container">
      <!-- Info e contatti company -->
      <div class="card">
        <img src="/img/mobile-light-pet-logo-2x-200x52.png" alt="logo">
        <h4>1234 Avada Avenue Avadaville</h4>
        <h4>info@your-company.com</h4>
        <h4>Call us: (1) 234 5678</h4>
      </div>

      <!-- Shop by brand lista-->
      <div class="card">
        <h3>Shop by brand</h3>
        <ul>
          <li>
            <a href="#">
              Bed
            </a>
          </li>
          <li>
            <a href="#">
              Food
            </a>
          </li>
          <li>
            <a href="#">
              Toys
            </a>
          </li>
          <li>
            <a href="#">
              Transport
            </a>
          </li>
        </ul>

      </div>

      <!-- Useful links lista-->
      <div class="card">
        <h3>Useful links</h3>
        <ul>
          <li>
            <a href="#">
              My account
            </a>
          </li>
          <li>
            <a href="#">
              Orders
            </a>
          </li>
          <li>
            <a href="#">
              Checkout
            </a>
          </li>
          <li>
            <a href="#">
              Cart
            </a>
          </li>
        </ul>

      </div>

      <!-- Newsletter email form-->
      <div class="card form">
        <h3>Subscribe to our newsletter</h3>

        <!-- email form campo richiesto e bottone submit -->
        <form action="#">
          <input type="email" placeholder="Insert your email...*" name="mail" required>
          <input type="submit" value="Subscribe">
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

#kelp {
  background-color: $kelp;
  height: 350px;
  color: $white;

  .container {
    justify-content: space-between;
    padding: 80px 0 50px;
    border-bottom: 2px solid #304132;

    .card {
      width: 200px;

      img {
        width: 80%;
        margin-bottom: 20px;
      }

      h4 {
        font-size: 0.7rem;
        font-weight: lighter;
        margin: 10px 0;
      }

      h3 {
        font-size: 1rem;
        font-weight: lighter;
      }

      li {
        font-size: 0.7rem;
        margin: 20px 0;
      }

    }

    .form {
      background-color: #264229;
      background-image: url('img/bg-transparent-3.png');
      background-repeat: no-repeat;
      background-size: contain;
      border-radius: 5px;
      padding: 25px 20px;

      form {
        input[type=submit] {
          cursor: pointer;
          background-color: $leaf;
          color: $white;
          width: 100%;
          border-radius: 20px;
          padding: 10px 40px;

          &:hover {
            background-color: #2A542A;
          }
        }

        input[type=email] {
          background-color: $dawn;
          padding: 12px;
          width: 100%;
          border-radius: 20px;
          font-size: 0.7rem;
          margin: 20px 0;
        }
      }
    }
  }
}
</style>