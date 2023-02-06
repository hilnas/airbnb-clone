<script lang="ts" setup>
import { useHead } from '@vueuse/head';

const { t } = useI18n();

useHead({
  title: 'Holiday Homes & Condo Rentals - Aribnb'
});
</script>

<template>
  <div class="home w-full">
    <!-- * Banner -->
    <div class="banner"></div>

    <!-- * Content -->
    <div class="content px-6 my-10">
      
      <aircnc-home-list />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/abstracts/mixins.scss';

.home {
  .banner {
    height: 530px;
    background: url('@/assets/images/banner.jpeg') no-repeat center/cover;
  }

  .content {
    @include primary-wrapper;

    .title {
      font-size: 22px;
      line-height: 26px;
    }
  }
}
</style>
