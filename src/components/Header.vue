<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<template>
  <header>
    <div id="logo_bar">
      <div class="container">
        <!-- Logo dell'ecommerce -->
        <a href="#"><img src="/img/dark-pet-logo.png" alt="logo"></a>

        <!-- Search bar -->
        <div id="search_bar">
          <input type="search" placeholder="Search...">
          <font-awesome-icon icon="fa-magnifying-glass" />
        </div>

        <!-- Contatto telefonico -->
        <span>
          <strong>Question?</strong>
          Call us : 1.800.123.4567
        </span>

        <!-- Icone shoppig bag e user -->
        <span>
          <a href="#"><font-awesome-icon icon="fa-solid fa-bag-shopping" /></a>
          <a href="#"><font-awesome-icon icon="fa-regular fa-user" /></a>
        </span>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


#logo_bar {
  height: 60px;
  border-bottom: 1px solid $dawn;

  .container {
    height: inherit;
    align-items: center;
    justify-content: space-between;

    img {
      height: 25px;
    }

    #search_bar {
      position: relative;

      svg {
        font-size: 0.6rem;
        position: absolute;
        top: 9px;
        left: 6px;
      }
    }

    input {
      font-size: 0.7rem;
      padding: 8px 8px 8px 30px;
      border-radius: 20px;
      width: 260px;
    }

    span {
      font-size: 0.8rem;
    }

    svg {
      margin: 0 5px;
    }
  }
}
</style>