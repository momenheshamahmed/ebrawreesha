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
.mybean {
  margin-top: 20px;
  margin-bottom: 30px;
}
.c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10 {
  height: 60px;
  width:70px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: inline-block;
}
.c2 {
  background-color:#ea2443;
}
.c3 {
  background-color:#20b355;
}
.c4 {
  background-color:#ee4a94;
}
.c5 {
  background-color:#164d96;
}
.c6 {
  background-color:#ffcb37;
}
.c7 {
  background-color:#eb1369;
}
.c8 {
  background-color:#b7dba1;
}
.c9 {
  background-color:#439fd1;
}
.c1 {
  background-color:#792a8a;
}
.c10 {
  background-color:#eda143;
}

h1 {
  font-family: 'Open Sans';
  font-weight: 700;
  text-transform: uppercase;
}
p {
  font-family: 'Open Sans';
  font-size: 1.3em;
}
button {
  border:none;
  background:#87B14A;
  width: 100%;
  color:white;
  padding: 10px;
  font-size:24px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 30px;
}
</style>
