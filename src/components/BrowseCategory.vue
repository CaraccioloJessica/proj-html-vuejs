<script>
import KibbleSection from './KibbleSection.vue'
import CategoryList from './CategoryList.vue'
import BestSellers from './BestSellers.vue';

export default {
  components: {
    KibbleSection,
    CategoryList,
    BestSellers
  }
}
</script>

<template>
  <div class="container">
    <!-- Categorie -->
    <section id="category">
      <h2>Browse by category</h2>
      <p>
        Augue purus et, tincidunt condimentum mauris. At nibh rutrum mi in. Nisi, vitae interdum eleifend dui,
        consequat nulla rhoncus dictum. Viverra
      </p>
    </section>

    <!-- prodotti -->
    <section id="product">
      <CategoryList />
    </section>

    <!-- croccantini -->
    <section id="croc">
      <KibbleSection />
    </section>

    <!-- Banner new arrivals -->
    <section id="new_arrivals">
      <h3>FIND THE BEST ANIMAL SUPPLIES</h3>
      <p>New arrivals weekly</p>
      <div id="btn">
        <a href="#">
          Learn more about us
        </a>
      </div>
    </section>

    <!-- Best sellers -->
    <section id="best_sellers">
      <h3>All-time best sellers</h3>
      <h2>Items everyone loves</h2>
      <div class="btn">
        <a href="#">
          View all products
        </a>
      </div>
    </section>

    <!-- Prodotti con prezzi -->
    <section id="best_item">
      <BestSellers />
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container {
  #category {
    width: inherit;
    padding: 80px 0 50px;
    text-align: center;

    h2 {
      color: $kelp;
      margin-bottom: 20px;
    }

    p {
      margin: 0 auto;
      width: 500px;
      font-size: 0.75rem;
      line-height: 1.5;
    }
  }

  #product {
    width: inherit;
    display: flex;
    gap: 10px;
  }

  #croc {
    width: inherit;
    display: flex;
    justify-content: space-between;
  }

  #new_arrivals {
    color: $white;
    width: inherit;
    height: 350px;
    margin-bottom: 50px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/img/banner-3-2x-scaled.jpg');
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    h3 {
      font-weight: lighter;
      font-size: 0.7rem;
    }

    p {
      margin: 20px 0;
      font-family: "Trocchi", serif;
      font-weight: lighter;
      font-size: 2.1rem;
    }

    #btn {
      text-align: center;
      width: 150px;
      font-weight: bold;
      font-size: 0.6rem;
      padding: 8px 10px;
      border-radius: 20px;
      background-color: $white;
      color: #000;

      &:hover {
        color: $white;
        background-color: $leaf;
      }
    }
  }

  #best_sellers {
    width: inherit;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;

    h3 {
      width: inherit;
      margin-bottom: 20px;
      color: $leaf;
      font-size: 0.9rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    .btn {
      font-size: 0.6rem;
      color: $white;
      background-color: $leaf;
      border-radius: 20px;
      align-self: center;
      padding: 8px 12px;

      &:hover {
        background-color: #2A542A;
      }
    }
  }

  #best_item {
    width: inherit;
    display: flex;
    justify-content: space-between;
  }
}
</style>