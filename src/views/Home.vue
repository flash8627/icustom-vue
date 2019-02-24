<template>
  <div class="home">
    <app-header></app-header>
    
    <home-sponsor></home-sponsor>
    <home-intro></home-intro>
    <home-service></home-service>
    <home-featured-product></home-featured-product>
    <home-ecustom-adds></home-ecustom-adds>
    <home-best-selling></home-best-selling>
    <home-special-price></home-special-price>
    <home-product-info></home-product-info>
    <home-recent-post></home-recent-post>

    <app-footer></app-footer>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import HomeIntro from '@/components/home/HomeIntro'
import HomeService from '@/components/home/HomeService'
import HomeFeaturedProduct from '@/components/home/HomeFeaturedProduct'
import HomeECustomadds from '@/components/home/HomeECustomadds'
import HomeBestSelling from '@/components/home/HomeBestSelling'
import HomeSpecialPrice from '@/components/home/HomeSpecialPrice'
import HomeProductInfo from '@/components/home/HomeProductInfo'
import HomeRecentPost from '@/components/home/HomeRecentPost'
import HomeSponsor from '@/components/home/HomeSponsor'

export default {
  name: 'home',
  components: {
    /*"HelloWorld":HelloWorld, */
    "home-intro":HomeIntro,
    "home-service":HomeService,
    "home-featured-product":HomeFeaturedProduct,
    "home-ecustom-adds":HomeECustomadds,
    "home-best-selling":HomeBestSelling,
    "home-special-price":HomeSpecialPrice,
    "home-product-info":HomeProductInfo,
    "home-recent-post":HomeRecentPost,
    "home-sponsor":HomeSponsor,
    "app-header":AppHeader,
    "app-footer":AppFooter
  }
}
</script>
