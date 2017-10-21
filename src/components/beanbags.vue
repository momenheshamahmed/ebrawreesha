<template>
<div class="container">
  <div class="col-md-12">
    <h1 class="beant col-md-12">Bean Bags</h1>
    <p class="col-md-6 descripep">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae facilisis nibh
      Sed volutpat tincidunt suscipit. Nullam hendrerit lectus quam, ac mattis enim lacinia in.
    </p>
  </div>
  <div class="col-md-12 beanbags">
    <!-- div 1 -->
    <div class="divbean col-md-3"
      v-on:mouseover="showmybean.showit =! showmybean.showit"
      v-on:mouseout="showmybean.showit =! showmybean.showit">

      <img src="../assets/beans/beanhome/b1.png" alt="">
      <div v-show="showmybean.showit" class="mybeaninfo">
        <p class="pbean">
          It is like a couch, but a boneless one. The Aloha? Comes from Hi! This is the perfect
           one to share with your beloved, especially if they like to take lots of space.

        </p>
        <button class="bordernow"><router-link to="/bean1" >order now</router-link></button>
      </div>
    </div>
    <!-- div 2 -->
    <div class="divbean col-md-3"
      v-on:mouseover="showmybean.showit1 =! showmybean.showit1"
      v-on:mouseout="showmybean.showit1 =! showmybean.showit1">

      <img src="../assets/beans/beanhome/b2.png" alt="">
      <div v-show="showmybean.showit1" class="mybeaninfo">
        <p class="pbean">
          This chair shaped beanbag is the choice for you when you want comfort and to focus on your business.
             Nobody knows where we had the E from, it sounded matching, you’ll love it when you see it.
        </p>
        <button class="bordernow"><router-link to="/bean2" >order now</router-link></button>
      </div>
    </div>
    <!-- div 3 -->
    <div class="divbean col-md-3"
      v-on:mouseover="showmybean.showit2 =! showmybean.showit2"
      v-on:mouseout="showmybean.showit2 =! showmybean.showit2">

      <img src="../assets/beans/beanhome/b3.png" alt="">
      <div v-show="showmybean.showit2" class="mybeaninfo">
        <p class="pbean">
          The Pillow shape is easy to form in any way you want to take advantage of the utmost comfort,
          just like those art clays.
        </p>
        <button class="bordernow"><router-link to="/bean3" >order now</router-link></button>
      </div>
    </div>
    <!-- div 4 -->
    <div class="divbean col-md-3"
      v-on:mouseover="showmybean.showit3 =! showmybean.showit3"
      v-on:mouseout="showmybean.showit3 =! showmybean.showit3">

      <img src="../assets/beans/beanhome/b4.png" alt="">
      <div v-show="showmybean.showit3" class="mybeaninfo">
        <p class="pbean">
        The Pillow shape is easy to form in any way you want to take
        advantage of the utmost comfort, just like those art clays.
       </p>
        <button class="bordernow"><router-link to="/bean4" >order now</router-link></button>
      </div>
    </div>
    <!-- div 5 -->
    <div class="divbean col-md-3"
      v-on:mouseover="showmybean.showit4 =! showmybean.showit4"
      v-on:mouseout="showmybean.showit4 =! showmybean.showit4">

      <img src="../assets/beans/beanhome/b5.png" alt="">
      <div v-show="showmybean.showit4" class="mybeaninfo">
        <p class="pbean">
        The standard. Needless we say more. They are perfect for relaxing and fun,
         a complete picture of seating comfort.
         </p>
        <button class="bordernow"><router-link to="/bean5" >order now</router-link></button>
      </div>
    </div>
    <!-- div 6 -->
    <div class="divbean col-md-3"
      v-on:mouseover="showmybean.showit5 =! showmybean.showit5"
      v-on:mouseout="showmybean.showit5 =! showmybean.showit5">

      <img src="../assets/beans/beanhome/b6.png" alt="">
      <div v-show="showmybean.showit5" class="mybeaninfo">
        <p class="pbean">
        The standard. Needless we say more. They are perfect for relaxing and
        fun, a complete picture of seating comfort.
        </p>
        <button class="bordernow"><router-link to="/bean6" >order now</router-link></button>
      </div>
    </div>
    <!-- div 7 -->
    <div class="divbean col-md-3"
      v-on:mouseover="showmybean.showit6 =! showmybean.showit6"
      v-on:mouseout="showmybean.showit6 =! showmybean.showit6">

      <img src="../assets/beans/beanhome/b7.png" alt="">
      <div v-show="showmybean.showit6" class="mybeaninfo">
        <p class="pbean">
          Because you are one marvelous piece of art, we introduce you the Plinth. A plinth is a heavy base or box
          on which a sculpture stands or is presented....
         </p>
        <button class="bordernow"><router-link to="/bean7" >order now</router-link></button>
      </div>
    </div>
    <!-- div 8 -->
    <div class="divbean col-md-3"
      v-on:mouseover="showmybean.showit7 =! showmybean.showit7"
      v-on:mouseout="showmybean.showit7 =! showmybean.showit7">

      <img src="../assets/beans/beanhome/b8.png" alt="">
      <div v-show="showmybean.showit7" class="mybeaninfo">
        <p class="pbean">
          You rule! Tons of fun and relaxation included in your throne.
          Stay fluffy, full and wonderfully comfortable.
        </p>
        <button class="bordernow"><router-link to="/bean8" >order now</router-link></button>
      </div>
    </div>
    <!-- div 9 -->
    <div class="divbean col-md-3"
      v-on:mouseover="showmybean.showit8 =! showmybean.showit8"
      v-on:mouseout="showmybean.showit8 =! showmybean.showit8">

      <img src="../assets/beans/beanhome/b9.png" alt="">
      <div v-show="showmybean.showit8" class="mybeaninfo">
        <p class="pbean">
          Because you don’t want to lose your kid inside those sacs, we made you one for them. Hey,
          we know they would get jealous of you as well!
        </p>
        <button class="bordernow"><router-link to="/bean9" >order now</router-link></button>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      showmybean: {
        showit: false,
        showit1: false,
        showit2: false,
        showit3: false,
        showit4: false,
        showit5: false,
        showit6: false,
        showit7: false,
        showit8: false

      }
    }
  }
}
</script>

<style scoped>
.beanbags {
  margin-bottom: 10px;
}
.divbean {
  width:270px;
  height:350px;
  position:relative;
  padding: 0;
}
.beant {
  font-weight: 700;
  font-size:50px;
  text-transform: uppercase;
  color:#87B14A;
}
.pbean {
  position: absolute;
  top:0px;
  padding: 20px;
  padding-top:50px;
  color:white;
  background-color:rgba(0,0,0, .6);
  height: 350px;
  font-family:'Open Sans';
  font-size:18px;
}
.bordernow {
  background-color:#87B14A;
  border:none;
  padding: 10px;
  text-align:center;
  position: absolute;
  bottom: 50px;
  right:30px;
  width:80%;
  font-size:18px;

}
.bordernow a {
  color:white;
  text-decoration:none;
  text-transform:uppercase;
  font-weight: 600;
}
.descripep {
  font-size:16px;

}
</style>
