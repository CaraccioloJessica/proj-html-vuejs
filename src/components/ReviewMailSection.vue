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
</style>