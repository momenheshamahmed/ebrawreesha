<template>
<div class="container">
  <div class="myslider">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <!-- <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol> -->

  <!-- Wrapper for slides -->
  <div class="carousel-inner">

    <div class="item active">
      <img src="../assets/beanbags/mega.png" alt="Mega Pilow" class="imgslider col-md-4">
      <div class="col-md-offset-1">
      <h1 class="col-md-6 tslider">Mega Pilow</h1>
      <p class="pslider col-md-6">
        The Pillow shape is easy to form in any way
        you want to take advantage of the utmost comfort,
        just like those art clays.
      </p>
      <button type="button" class="bordernow col-md-2 col-sm-4"><router-link to="/bean3">order now</router-link></button>
      <button type="button" class="bdisocver col-md-2 col-sm-4"><router-link to="/product">dicover now</router-link></button>
    </div>
    </div>

    <div class="item">
      <img src="../assets/beanbags/mega.png" alt="Mega Pilow" class="imgslider col-md-4">
      <div class="col-md-offset-1">
      <h1 class="col-md-6 tslider">Mega Pilow</h1>
      <p class="pslider col-md-6">
        The Pillow shape is easy to form in any way
        you want to take advantage of the utmost comfort,
        just like those art clays.
      </p>
      <button type="button" class="bordernow col-md-2 col-sm-4"><router-link to="/bean2">order now</router-link></button>
      <button type="button" class="bdisocver col-md-2 col-sm-4"><router-link to="/product">dicover now</router-link></button>
    </div>
    </div>

    <div class="item">
      <img src="../assets/beanbags/mega.png" alt="Mega Pilow" class="imgslider col-md-4">
      <div class="col-md-offset-1">
      <h1 class="col-md-6 tslider">Mega Pilow</h1>
      <p class="pslider col-md-6">
        The Pillow shape is easy to form in any way
        you want to take advantage of the utmost comfort,
        just like those art clays.
      </p>
      <button type="button" class="bordernow col-md-2 col-sm-4"><router-link to="/bean3">order now</router-link></button>
      <button type="button" class="bdisocver col-md-2 col-sm-4"><router-link to="/product">dicover now</router-link></button>
    </div>
    </div>
  </div>

  <!-- Left and right controls -->
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="fa fa-angle-left col-md-1"></span>
  </a>
  <a class="right carousel-control col-md-1" href="#myCarousel" data-slide="next">
    <span class="fa fa-angle-right"></span>
  </a>
  </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.myslider {
  position: relative;
}
.imgslider {
  float:right;
  margin-right:110px;
}

.carousel-control.right,
.carousel-control.left {
  background-image: none;

}
.carousel-control {
  text-shadow: none;
}
.fa.fa-angle-left, .fa.fa-angle-right {
  color:black;
  font-size:60px;
  position: absolute;
  box-shadow:none;
  top:40%;
  color:#262626;
  box-shadow: none;
}
.fa.fa-angle-right {
  right:0;
}
.fa.fa-angle-left {
  left: 0;
}
.tslider {
  font-weight: 800;
  font-family: 'Open Sans';
  margin-bottom: 10px;
  text-transform: uppercase;
}
.pslider {
  font-size:16px;
  font-weight: 500;
}
.bordernow, .bdisocver {
  border:none;
  margin-top:20px;
  margin-left: 10px;
  padding: 10px;
  outline:none;
  font-size:17px;
  font-family:'Open Sans';
  text-transform: uppercase;
  font-weight: 600;
}
.bordernow a, .bdisocver a{
  color:white;
  text-decoration: none;

}

.bordernow {
  background-color:#87B14A;

}
.bdisocver {
  background-color:#F3A43C;
}
@media screen and (max-width:990px) {
  .imgslider {
    margin-right:0;
    right:0px;
  }
}
@media screen and (max-width:600px) {
  .fa.fa-angle-left, .fa.fa-angle-right {
    top:30%;
  }
  .imgslider {
    width:100%;
    margin:0 auto;
    /*right:10px;*/
    margin-bottom: 10px;
    position: static;
  }
  .bordernow, .bdisocver {
    width:43%;
    font-size:18px;

  }
  .tslider {
    margin-top:20px;
  }

}

</style>
