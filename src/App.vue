<script>
import Header from './components/Header.vue';
import BrowseCategory from './components/BrowseCategory.vue';
import ReviewMailSection from './components/ReviewMailSection.vue';
import BlogSection from './components/BlogSection.vue';
import BannerShopSection from './components/BannerShopSection.vue';
import Shop from './components/Shop.vue';

export default {
  components: {
    Header,
    BrowseCategory,
    ReviewMailSection,
    BlogSection,
    BannerShopSection,
    Shop
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
    <Shop />
  </main>

  <footer>

  </footer>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
