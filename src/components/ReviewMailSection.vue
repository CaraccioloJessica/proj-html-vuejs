<script>
export default {

}
</script>

<template>
  <section id="kelp_bg">
    <div class="container">
      <h2>Users testimonials</h2>

      <div class="testimonials">
        <img src="/img/avatar-3-200x200.jpg" alt="">
        <p>
          Auctor est habitasse amet nunc, interdum vel mattis sodales cras. Ut nulla quis nunc, tincidunt eu. Eu.
        </p>
        <span>Lisa Smith, ThemeFusion</span>
      </div>
      <div class="testimonials">
        <img src="/img/avatar-1-200x200.jpg" alt="">
        <p>
          Auctor est habitasse amet nunc, interdum vel mattis sodales cras. Ut nulla quis nunc, tincidunt eu. Eu.
        </p>
        <span>Melissa Green, ThemeFusion</span>
      </div>
      <div class="testimonials">
        <img src="/img/avatar-4-200x200.jpg" alt="">
        <p>
          Auctor est habitasse amet nunc, interdum vel mattis sodales cras. Ut nulla quis nunc, tincidunt eu. Eu.
        </p>
        <span>Sam Lewis, ThemeFusion</span>
      </div>
    </div>
  </section>

  <section id="mail_banner">
    <div class="subscribe">
      <h2>Join our newsletter</h2>
      <p>Volutpat vel turpis nulla lorem sed semper. Aliquam sagittis sem libero viverra vehicula nullam ut nisl.</p>

      <form action="#">
        <input type="email" placeholder="Insert your email...*" name="mail" required>
        <input type="submit" value="Subscribe">
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

#kelp_bg {
  background-color: $kelp;
  height: 500px;
  background-image: url('img/bg-transparent-3.png');
  background-size: 250px;
  background-repeat: repeat-x;
  color: $white;

  .container {
    justify-content: space-between;
    padding-top: 100px;

    h2 {
      font-family: "Trocchi", serif;
      font-weight: lighter;
      font-size: 1.8rem;
      width: inherit;
      text-align: center;
      margin-bottom: 50px;
    }

    .testimonials {
      width: 230px;
      text-align: center;

      img {
        border-radius: 50%;
        height: 70px;
      }

      p {
        font-size: 0.7rem;
        line-height: 1.8;
        margin: 20px 0 10px;
      }

      span {
        font-size: 0.75rem;
        color: $grey;
      }
    }
  }
}

#mail_banner {
  height: 330px;
  width: 900px;
  background-image: linear-gradient(0deg, #fcfaf9 0%, rgba(0, 0, 0, 0) 40%), url('img/banner-7-2x-scaled.jpg');
  background-size: cover;
  margin: 0 auto;
  position: relative;
  top: -50px;
  display: flex;
  align-items: center;

  .subscribe {
    width: 55%;
    padding-left: 70px;

    h2 {
      color: $kelp;
      font-size: 1.7rem;

    }

    p {
      font-size: 0.75rem;
      margin: 30px 0;
      line-height: 1.5;
    }

    form {
      input[type=submit] {
        cursor: pointer;
        background-color: $leaf;
        color: white;
        border-radius: 20px;
        padding: 10px 40px;
        margin-left: 20px;

        &:hover {
          background-color: #2A542A;
        }
      }

      input[type=email] {
        background-color: $dawn;
        padding: 12px;
        width: 60%;
        border-radius: 20px;
        font-size: 0.7rem;
      }
    }
  }
}
</style>