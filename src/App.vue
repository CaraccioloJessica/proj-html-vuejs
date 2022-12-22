<script>
import Header from './components/Header.vue';
import BrowseCategory from './components/BrowseCategory.vue';
import ReviewMailSection from './components/ReviewMailSection.vue';

export default {
  components: {
    Header,
    BrowseCategory,
    ReviewMailSection
  }
}
</script>

<template>
  <Header />

  <main>
    <BrowseCategory />
    <ReviewMailSection />

  </main>

  <footer>

  </footer>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
