<script>
export default {
  data() {
    return {
      // Array di categorie prodotti
      categories: [
        {
          title: 'Bed (1)',
          image: '/img/product-9-300x300.jpg',
        },
        {
          title: 'Food (6)',
          image: '/img/product-3-300x300.jpg',
        },
        {
          title: 'Toys (6)',
          image: '/img/product-2-300x300.jpg',
        },
        {
          title: 'Transport (6)',
          image: '/img/product-4-300x300.jpg',
        }
      ]

    }
  }
}
</script>

<template>
  <!-- Cicla nell'array categorie e stampa immagine e titolo -->
  <div class="card" v-for="category in categories" :key="id">
    <a href="#">
      <img :src="category.image" :alt="category.title">
      <span>{{ category.title }}</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
  width: 220px;
  margin-bottom: 80px;
  text-align: center;

  img {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>