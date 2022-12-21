<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Transport cage',
          image: '/img/product-21-200x200.jpg',
          price: '$25.00',
          sales: false
        },
        {
          title: 'Dog leash',
          image: '/img/product-20-200x200.jpg',
          price: '$25.00',
          sales: false
        },
        {
          title: 'Animal transport cage',
          image: '/img/product-16-200x200.jpg',
          price: '$25.00',
          sales: true
        },
        {
          title: 'Colorful cat leash',
          image: '/img/product-11-200x200.jpg',
          price: '$12.00',
          sales: false
        }
      ]

    }
  }
}
</script>

<template>
  <div class="card" v-for="item in items" :key="id">
    <img :src="item.image" :alt="item.title">
    <h5>{{ item.title }}</h5>
    <span id="sales" v-show="item.sales">&dollar;35.00</span>
    <span>{{ item.price }}</span>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
  width: 200px;
  margin-bottom: 80px;
  text-align: center;

  img {
    width: 100%;
    margin-bottom: 10px;
  }

  h5 {
    font-weight: lighter;
  }

  #sales {
    font-size: 0.6rem;
    margin-right: 5px;
    text-decoration: line-through;
    text-decoration-color: #000;
  }

  span {
    font-size: 0.8rem;
    color: $leaf;
  }
}
</style>