<script>
import { store } from '../store.js'

export default {
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <div id="menu">
    <div class="container">
      <nav>
        <ul>
          <!-- Cicla nell'array dei links per la navigazione -->
          <li v-for="link in store.links" :key="id">
            <!-- aggiunge classe active al link con valore true -->
            <a :class="{ active: link.current }" :href="link.url">{{ link.text }}
              <!-- mostra angle solo se il valore è true nell'array -->
              <span v-show="link.icon"><font-awesome-icon icon="fa-solid fa-angle-down" /></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

#menu {
  height: 40px;

  .container {
    height: inherit;
    justify-content: center;
    align-items: center;

    ul {
      display: flex;

      li {
        font-weight: bold;
        font-size: 0.7rem;
        margin: 0 15px;
        color: $grey;

        a {

          &:hover,
          &.active {
            color: #000000;
          }

          svg {
            font-size: 0.6rem;
          }
        }
      }
    }
  }
}
</style>