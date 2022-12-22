<script>
export default {
  data() {
    return {
      // Array con ultimi arrivi del negozio
      items: [
        {
          id: '1',
          title: 'Colored pet bed',
          image: '/img/product-8-300x300.jpg',
          price: '$18.00 - $26.00',
          sales: false,
          before: '',
        },
        {
          id: '2',
          title: 'Colorful ball set',
          image: '/img/product-2-300x300.jpg',
          price: '$29.00',
          sales: false,
          before: '',
        },
        {
          id: '3',
          title: 'Dog bone',
          image: '/img/product-3-300x300.jpg',
          price: '$18.00',
          sales: true,
          before: '$35.00', //prezzo prima dello sconto
        },
        {
          id: '4',
          title: 'Animal transport bag',
          image: '/img/product-4-300x300.jpg',
          price: '$29.00',
          sales: false,
          before: '',
        },
        {
          id: '5',
          title: 'Animal transport cage',
          image: '/img/product-5-300x300.jpg',
          price: '$35.00',
          sales: false,
          before: '',
        },
        {
          id: '6',
          title: 'Closable cat litter',
          image: '/img/product-10-300x300.jpg',
          price: '$16.00',
          sales: false,
          before: '',
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

      <!-- Cicla nell'array dei prodotti e stampa immagine, titolo, prezzo, sconto e tiene conto dell'id dichiarato per utilizzarlo quando al mouseover deve mettere il div.check-->
      <div class="card" v-for="item in items" :key="id" @mouseover="item.isHovered = true"
        @mouseout="item.isHovered = false">
        <!-- al passaggio del mouse il div.check viene visualizzato e all'uscita si nasconde -->
        <img :src="item.image" :alt="item.title">
        <h5>{{ item.title }}</h5>
        <span id="sales" v-show="item.sales">
          {{ item.before }} <!-- prezzo prima dello sconto -->
        </span>
        <span>{{ item.price }}</span>
        <span id="tag" v-show="item.sales">Sale!</span>

        <!-- Div visualizzato al valore del mouseover -->
        <div class="check" v-show="item.isHovered">
          <font-awesome-icon icon="fa-regular fa-circle-check" />
          <span>VIEW CART</span>
        </div>
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
      z-index: 2;
    }

    .check {
      span {
        color: $white;
      }
    }
  }
}
</style>