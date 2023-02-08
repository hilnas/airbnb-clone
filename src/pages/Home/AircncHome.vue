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
    <div class="banner">

      <div class="header_text">
          
           <h1 class="text-center text-white" style="font-size: 60px">
              Discover New Adventures
            </h1>
            <p class="text-center text-white lead" style="font-size: 30px">
                Find the perfect vacation rental
            </p>
        </div>
      
        <div class="search_bar">
          <br>
          <input type="text" class="form-control" placeholder="Search Destinations" style="width: 500px; height: 50px; text-align: center;"/>
          <button  class="button-65" role="button">Search</button>
        </div>

    </div>

    <!-- * Content -->
    <div class="content px-6 my-10">
      <aircnc-home-list />
    </div>

  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/abstracts/mixins.scss';


.banner {
    
    background: url('@/assets/images/banner.jpeg') no-repeat center/cover;
    height: 515px;
    widows: 100%;

    .header_text {
      position: relative;
      top: 120px;
      left: 3%;
      font-size: 20px;
    }

    .search_bar {
        position: relative;
        top: 130px;
        left: 30%;
        font-size: 20px;
    }

    .button-65 {
      appearance: none;
      backface-visibility: hidden;
      background-color: #2f80ed;
      border-style: none;
      box-shadow: none;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
      font-size: 13px;
      font-weight: 500;
      height: 50px;
      letter-spacing: normal;
      line-height: 1.5;
      outline: none;
      overflow: hidden;
      padding: 14px 30px;
      position: relative;
      text-align: center;
      text-decoration: none;
      transform: translate3d(0, 0, 0);
      transition: all .3s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      vertical-align: top;
      white-space: nowrap;
  }
}


.content {
  @include primary-wrapper;
  .title {
    font-size: 22px;
    line-height: 26px;
  }
}

input {
  font: inherit;
  border: 1px solid #ccc;
}



</style>


