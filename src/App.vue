<script>
import Header from './components/Header.vue';
import BrowseCategory from './components/BrowseCategory.vue';
import ReviewMailSection from './components/ReviewMailSection.vue';
import BlogSection from './components/BlogSection.vue';
import BannerShopSection from './components/BannerShopSection.vue';
import Shop from './components/Shop.vue';
import FooterTop from './components/FooterTop.vue';
import FooterBottom from './components/FooterBottom.vue';

export default {
  components: {
    Header,
    BrowseCategory,
    ReviewMailSection,
    BlogSection,
    BannerShopSection,
    Shop,
    FooterTop,
    FooterBottom
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
    <FooterTop />
    <FooterBottom />
  </footer>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
