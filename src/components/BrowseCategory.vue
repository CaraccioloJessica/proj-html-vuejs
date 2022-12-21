<script>
import KibbleSection from './KibbleSection.vue'
import CategoryList from './CategoryList.vue'

export default {
  components: {
    KibbleSection,
    CategoryList
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
      <h1>FIND THE BEST ANIMAL SUPPLIES</h1>
      <p>New arrivals weekly</p>
      <div id="btn">
        <a href="#">
          Learn more about us
        </a>
      </div>
    </section>

    <!-- Best sellers -->
    <section>

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
      font-family: "Trocchi", serif;
      font-weight: lighter;
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
    gap: 10px;
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

    h1 {
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
    }
  }
}
</style>