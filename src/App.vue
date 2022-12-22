<script>
import Header from './components/Header.vue';
import BrowseCategory from './components/BrowseCategory.vue';
import ReviewMailSection from './components/ReviewMailSection.vue';
import BlogSection from './components/BlogSection.vue';
import BannerShopSection from './components/BannerShopSection.vue';

export default {
  components: {
    Header,
    BrowseCategory,
    ReviewMailSection,
    BlogSection,
    BannerShopSection
  }
}
</script>

<template>
  <Header />

  <main>
    <BrowseCategory />
    <ReviewMailSection />
    <BlogSection />
    <BannerShopSection />
  </main>

  <footer>

  </footer>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
