<template>
<div class="container">
  <div id="myheader">
    <!-- my logo float to left -->
    <div class="col-md-1">
      <router-link to="/">
        <img src="../assets/logo.png" class="mylogo "alt="Ebra W Reesha Logo" />
      </router-link>
    </div>
    <!-- when i click on the icons-bar it will show the navbar -->
    <div class="myclick col-md-2">
      <i class="fa fa-bars" aria-hidden="true" v-on:click="shownav =! shownav"></i>
    </div>
    <!-- clear fix to clear float -->
    <div class="clearfix"></div>
    <!-- clear fix to clear float -->
  <!-- my navbar it will be horeizenal and vertical  -->
      <div v-show="shownav" class="col-md-12 mynav">
        <ul>
            <li v-on:click="shownav =! shownav"><router-link to="/" >Home</router-link></li>
            <li v-on:click="shownav =! shownav"><router-link to="/aboutus">About us</router-link></li>
            <li v-on:click="shownav =! shownav"><router-link to="/product">Product</router-link></li>
            <li v-on:click="shownav =! shownav"><router-link to="/partners">partners</router-link></li>
            <li v-on:click="shownav =! shownav"><router-link to="/contactus">contact us</router-link></li>
            <li v-on:click="shownav =! shownav"><router-link to="/politics">politics</router-link></li>
        </ul>

      </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      shownav: false
    }
  }

}
</script>

<!-- scoped mean the style is limit on only this component -->

<style scoped>
#myheader {
  height: 100px;

}
.mylogo {
  float:left;
}
.myclick{
font-size:40px;
margin:15px 0;
float:right;
}
.mynav {
  display:block;
  z-index:100;
  background-color:white;
}
ul {
  padding:0;
  margin-top:15px;
  display:block;
}
ul li {
  list-style:none;
  display: inline;
  padding-right:24px;
  font-family:'Open Sans';
  font-weight: 700;

}
ul li a {
  padding: 10px;
  color:black;
  text-transform: uppercase;
}
ul li a:hover {
  background-color:#F3A43C;
  color:white;
  text-decoration:none;
  border-radius: 10px;
}
/* clearfix to clear my float */
.clearfix:before {
  display:table;
  content:'';
}
.clearfix:after {
  clear:both;
}
@media screen and (max-width:1200px) {
  ul li {
    padding-right: 10px;
  }
}
@media screen and (max-width:1000px) {
  ul li {
    padding-right: 5px;
  }
}
@media screen and (max-width:800px) {
  ul {
    padding:0;
  }
  ul li a {
    width:100%;
    display: block;
  }
}
</style>
