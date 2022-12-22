<script>
export default {
  data() {
    return {
      food: [
        {
          title: 'Kibble',
          type: 'Dry dog food',
          image: '/img/food-transparent-18-200x210.png',
          btn: 'Shop dry food',
        },
        {
          title: 'Moist',
          type: 'Canned dog food',
          image: '/img/food-transparent-17-200x210.png',
          btn: 'Shop moist food',
        },
        {
          title: 'Frozen',
          type: 'Freeze-dried dog food',
          image: '/img/food-transparent-16-200x210.png',
          btn: 'Shop frozen food',
        }
      ]

    }
  }
}
</script>

<template>
  <div class="kibble" v-for="kibble in food" :key="id">
    <h3>{{ kibble.title }}</h3>
    <h5>{{ kibble.type }}</h5>
    <img :src="kibble.image" :alt="kibble.title">
    <div class="btn">
      <a href="#">
        {{ kibble.btn }}
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.kibble {
  background-image: url('img/bg-transparent-3.png');
  background-color: $kelp;
  background-repeat: no-repeat;
  background-size: contain;
  width: 32.5%;
  padding: 50px;
  text-align: center;
  margin-bottom: 60px;

  &:hover {
    transform: scale(1.04);
    background-color: #1F3821;
  }

  h3 {
    color: $white;
    font-family: "Trocchi", serif;
    font-weight: lighter;
    font-size: 1.4rem;
    margin-bottom: 15px;
  }

  h5 {
    color: #599f64;
    margin-bottom: 15px;
  }

  .btn {
    font-size: 0.6rem;
    margin: 0 auto;
    width: 100px;
    color: $white;
    background-color: $leaf;
    padding: 8px 0;
    border-radius: 20px;
  }
}
</style>