<script>
// importa store per versione modificata navbar
import { store } from '../store.js'

export default {
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <section id="kelp">
    <nav>
      <ul>
        <!-- Cicla nell'array dei footerLinks per la navbar -->
        <li v-for="link in store.footerLinks" :key="id">
          <a :class="{ active: link.current }" :href="link.url">{{ link.text }}
          </a>
        </li>
      </ul>
    </nav>

    <!-- Icone brand social -->
    <div id="brand">
      <!-- facebook -->
      <a href="#">
        <font-awesome-icon icon="fa-brands fa-facebook-f" />
      </a>
      <!-- twitter -->
      <a href="#">
        <font-awesome-icon icon="fa-brands fa-twitter" />
      </a>
      <!-- instagram -->
      <a href="#">
        <font-awesome-icon icon="fa-brands fa-instagram" />
      </a>
      <!-- youtube -->
      <a href="#">
        <font-awesome-icon icon="fa-brands fa-youtube" />
      </a>
    </div>

    <!-- parte del copyright del tema -->
    <div id="copyright">
      <span>&copy; Copyright 2012 - 2020 &vert; Avada Theme by ThemeFusion &vert; All Rights Reserved &vert; Powered by
        Wordpress</span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

#kelp {
  background-color: $kelp;
  color: $white;

  ul {
    display: flex;
    justify-content: center;
    padding: 30px 0;

    li {
      color: $grey;
      font-size: 0.75rem;
      margin: 0 10px;

      a {

        &:hover,
        &.active {
          color: $white;
        }
      }
    }
  }

  #brand {
    display: flex;
    justify-content: center;
    margin-bottom: 80px;

    svg {
      margin: 0 10px;
    }
  }

  #copyright {
    font-size: 0.6rem;
    background-color: black;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>