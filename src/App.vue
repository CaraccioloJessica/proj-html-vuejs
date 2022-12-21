<script>
import Header from './components/Header.vue';
import BrowseCategory from './components/BrowseCategory.vue';

export default {
  components: {
    Header,
    BrowseCategory,
  }
}
</script>

<template>
  <Header />

  <main>
    <BrowseCategory />

  </main>

  <footer>

  </footer>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
