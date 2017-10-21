<template>
<div class="container mybean">
  <div class="col-md-4">
    <div class="owl-carousel" id="owl-carousel">
      <img src="../assets/beans/c3/c1.png" alt="Mega Pilow" title="Mega Pilow">
      <img src="../assets/beans/c3/c2.png" alt="Mega Pilow" title="Mega Pilow">
      <img src="../assets/beans/c3/c3.png" alt="Mega Pilow" title="Mega Pilow">
    </div>
    <router-link to="/ordernow"><button>order now</button></router-link>
  </div>
    <div class="beaninfo col-md-8">
      <h1>MEGA PILOW</h1>
      <p>The Pillow shape is easy to form in any way you want to take advantage of the utmost comfort,
          just like those art clays.
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
