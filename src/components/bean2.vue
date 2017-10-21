<template>
<div class="container mybean">
  <div class="col-md-4">
    <div class="owl-carousel" id="owl-carousel">
      <img src="../assets/beans/c2/c1.png" alt="E-Chair" title="E-Chair">
      <img src="../assets/beans/c2/c2.png" alt="E-Chair" title="E-Chair">
      <img src="../assets/beans/c2/c3.png" alt="E-Chair" title="E-Chair">
    </div>
    <router-link to="/ordernow"><button>order now</button></router-link>
  </div>
    <div class="beaninfo col-md-8">
      <h1>THE E-CHAIR</h1>
      <p>This chair shaped beanbag is the choice for you when you want comfort and to focus on your business.
         Nobody knows where we had the E from, it sounded matching, you’ll love it when you see it.
      </p>
      <h1>colors</h1>
      <div class="colors">
        <div class="">
          <div class="c1"></div>
          <div class="c2"></div>
          <div class="c3"></div>
          <div class="c4"></div>
          <div class="c5"></div>
          <div class="c6"></div>
          <div class="c7"></div>
          <div class="c8"></div>
          <div class="c9"></div>
          <div class="c10"></div>
      </div>
      </div>
      <h1>Deminsions</h1>
      <p>75×120×85 cm</p>
      <h1>Materials</h1>
      <p>Fabric - Leather - Waterproof- Pvc - vensoa</p>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted: function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true
    });


  }
}
</script>

<style scoped>
@import '../assets/bean.css';
</style>
