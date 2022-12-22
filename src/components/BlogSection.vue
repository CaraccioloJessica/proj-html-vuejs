<script>
export default {
  data() {
    return {
      articles: [
        {
          image: '/img/blog-1-200x200.jpg',
          title: 'How to "loose leash walk" your dog',
          date: 'April 21st, 2020'
        },
        {
          image: '/img/blog-2-200x200.jpg',
          title: 'Stop cats from scratching furniture',
          date: 'April 19th, 2020'
        },
        {
          image: '/img/blog-3-200x200.jpg',
          title: 'Where to buy the best pet food',
          date: 'April 18th, 2020'
        },
        {
          image: '/img/blog-4-200x200.jpg',
          title: 'Proper care for your pet toys',
          date: 'April 17th, 2020'
        },
      ]
    }
  }
}
</script>

<template>
  <section>
    <div class="container">
      <h2>Get the best tips &amp; tricks</h2>
      <h5>Recent articles</h5>

      <div class="articles" v-for="article in articles" :key="id">
        <a href="#">
          <img :src="article.image" :alt="article.title">
          <h3>{{ article.title }}</h3>
          <span>{{ article.date }}</span>
        </a>
      </div>

      <div class="btn">
        <a href="#">
          Read all articles
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container {
  gap: 32px;
  margin-bottom: 60px;

  h2 {
    width: inherit;
    color: $kelp;
    text-align: center;
  }

  h5 {
    width: inherit;
    color: $leaf;
    text-align: center;
  }

  .articles {
    width: 200px;

    h3 {
      padding: 10px 10px 0;
      font-weight: lighter;
      font-size: 0.9rem;
      line-height: 1.5;
    }

    span {
      padding: 0 10px;
      font-size: 0.6rem;
    }
  }

  .btn {
    text-align: center;
    font-size: 0.6rem;
    margin: 0 auto;
    width: 120px;
    color: $white;
    background-color: $leaf;
    padding: 10px 12px;
    border-radius: 20px;

    &:hover {
      background-color: #2A542A;
    }
  }
}
</style>