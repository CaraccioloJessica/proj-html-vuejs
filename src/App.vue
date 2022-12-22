<script>
import Header from './components/Header.vue';
import BrowseCategory from './components/BrowseCategory.vue';
import ReviewMailSection from './components/ReviewMailSection.vue';
import BlogSection from './components/BlogSection.vue';

export default {
  components: {
    Header,
    BrowseCategory,
    ReviewMailSection,
    BlogSection
  }
}
</script>

<template>
  <Header />

  <main>
    <BrowseCategory />
    <ReviewMailSection />
    <BlogSection />

  </main>

  <footer>

  </footer>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
