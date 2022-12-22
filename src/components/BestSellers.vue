<script>
export default {
  data() {
    return {
      items: [
        {
          id: '1',
          title: 'Transport cage',
          image: '/img/product-21-200x200.jpg',
          price: '$25.00',
          sales: false,
          before: '',
        },
        {
          id: '2',
          title: 'Dog leash',
          image: '/img/product-20-200x200.jpg',
          price: '$25.00',
          sales: false,
          before: '',
        },
        {
          id: '3',
          title: 'Animal transport cage',
          image: '/img/product-16-200x200.jpg',
          price: '$25.00',
          sales: true,
          before: '$35.00', //prezzo prima dello sconto
        },
        {
          id: '4',
          title: 'Colorful cat leash',
          image: '/img/product-11-200x200.jpg',
          price: '$12.00',
          sales: false,
          before: '',
        }
      ]

    }
  }
}
</script>

<template>
  <div class="card" v-for="item in items" :key="id" @mouseover="item.isHovered = true"
    @mouseout="item.isHovered = false">
    <img :src="item.image" :alt="item.title">
    <h5>{{ item.title }}</h5>
    <span id="sales" v-show="item.sales">
      {{ item.before }} <!-- prezzo prima dello sconto -->
    </span>
    <span>{{ item.price }}</span>

    <!-- View cart icon on hover -->
    <div class="check" v-show="item.isHovered">
      <font-awesome-icon icon="fa-regular fa-circle-check" />
      <span>VIEW CART</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
  position: relative;
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

  .check {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 50px;

    span {
      color: $white;
    }
  }
}
</style>