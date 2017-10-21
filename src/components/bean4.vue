<template>
<div class="container mybean">
  <div class="col-md-4">
    <div class="owl-carousel" id="owl-carousel">
      <img src="../assets/clients.png" alt="">
      <img src="../assets/clients.png" alt="">
      <img src="../assets/clients.png" alt="">
    </div>
    <router-link to="/ordernow"><button>order now</button></router-link>
  </div>
    <div class="beaninfo col-md-8">
      <h1>ALOHA SOFA</h1>
      <p>It is like a couch, but a boneless one. The Aloha? Comes from Hi! This is the perfect
        one to share with your beloved, especially if they like to take lots of space.
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
      <p>75×140×192 cm</p>
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
