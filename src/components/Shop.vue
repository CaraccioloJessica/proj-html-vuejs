<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Colored pet bed',
          image: '/img/product-8-300x300.jpg',
          price: '$18.00 - $26.00',
          sales: false,
        },
        {
          title: 'Colorful ball set',
          image: '/img/product-2-300x300.jpg',
          price: '$29.00',
          sales: false,
        },
        {
          title: 'Dog bone',
          image: '/img/product-3-300x300.jpg',
          price: '$18.00',
          sales: true,
        },
        {
          title: 'Animal transport bag',
          image: '/img/product-4-300x300.jpg',
          price: '$29.00',
          sales: false,
        },
        {
          title: 'Animal transport cage',
          image: '/img/product-5-300x300.jpg',
          price: '$35.00',
          sales: false,
        },
        {
          title: 'Closable cat litter',
          image: '/img/product-10-300x300.jpg',
          price: '$16.00',
          sales: false,
        },
      ]

    }
  }
}
</script>

<template>
  <section>
    <div class="container">
      <h2>New products arrival</h2>
      <p>Latest products</p>

      <div class="card" v-for="item in items" :key="id">
        <img :src="item.image" :alt="item.title">
        <h5>{{ item.title }}</h5>
        <span id="sales" v-show="item.sales">&dollar;35.00</span>
        <span>{{ item.price }}</span>
        <span id="tag" v-show="item.sales">Sale!</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container {
  margin-bottom: 80px;

  h2,
  p {
    width: inherit;
    text-align: center;
  }

  h2 {
    color: $kelp;
  }

  p {
    margin: 20px 0 30px;
    font-weight: bold;
    font-size: 0.8rem;
    color: $leaf;
  }

  .card {
    position: relative;
    width: 300px;
    margin-bottom: 20px;
    padding: 10px;
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

    #tag {
      font-size: 0.7rem;
      position: absolute;
      top: 20px;
      left: 20px;
      color: $white;
      background-color: $leaf;
      padding: 5px;
      border-radius: 50%;
    }
  }
}
</style>