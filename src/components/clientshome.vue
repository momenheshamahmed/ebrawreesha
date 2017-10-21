<template>
<div class="container">
  <div class="col-md-12">
    <div class="owl-carousel" id="owl-carousel">
      <img src="../assets/clients.png" alt="">
      <img src="../assets/clients.png" alt="">
      <img src="../assets/clients.png" alt="">
      <img src="../assets/clients.png" alt="">
      <img src="../assets/clients.png" alt="">
      <img src="../assets/clients.png" alt="">
      <img src="../assets/clients.png" alt="">
      <img src="../assets/clients.png" alt="">
      <img src="../assets/clients.png" alt="">
      <img src="../assets/clients.png" alt="">
      <img src="../assets/clients.png" alt="">
    </div>
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
        items:5,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    });

  }
}
</script>

<style scoped>



</style>
