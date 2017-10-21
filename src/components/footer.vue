<template>
<div class="myfooter">
<div class=" container">
    <div class="aboutme  col-md-4">
      <img src="../assets/logof.png" alt="Ebra W Reesha">
      <p class="aboutp">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget metus at velit scelerisque tristique.
        Nunc dictum neque ac diam posuere, a aliquet est faucibus. Curabitur euismod fermentum tempus. Nulla a vestibulum magna.
        Donec eget scelerisque sem,
        vel malesuada lectus. Aenean dictum odio et ligula ultricies, sed
      </p>
    </div>
    <div class="col-md-2">
      <ul>
          <li><router-link to="/" >Home</router-link></li>
          <li><router-link to="/aboutus">About us</router-link></li>
          <li><router-link to="/product">Product</router-link></li>
          <li><router-link to="/partners">partners</router-link></li>
          <li><router-link to="/contactus">contact us</router-link></li>
          <li><router-link to="/politics">politics</router-link></li>
      </ul>
    </div>
    <div class="myform">
      <form class="col-md-4 col-md-offset-2">
        <input type="text" placeholder="" v-model="message.name" class="iname col-md-10 col-sm-8" placeholder="Name">
        <input type="text" placeholder="" v-model="message.email" class="inmail col-md-10 col-sm-8" placeholder="Email">
        <textarea class="intext col-md-12 col-sm-10" v-model="message.text"></textarea>
        <button class="col-md-offset-6 col-md-6 mybutton">send now</button>
      </form>
    </div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      message: {
        name: '',
        email: '',
        text: ''
      }
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.myfooter{
  background:#262626;
  width: 100%;
  padding:20px 0;

}
ul li {
  list-style: none;
  padding: 0;
  font-size:18px;

}
ul li a {
  color:white;
}

.aboutp {
  color:white;
  margin-top:15px;
}
.iname, .inmail {
  height: 40px;
}
input {
  color:black;
  outline:none;
}
.intext, .inmail, .iname {
  border: 2px solid #e3e3e3;
  border-radius: 10px;
  margin-bottom: 10px;
  padding:10px;
  font-family:'Open Sans';
  font-weight: 600;
}
.intext {
  height: 90px;
  outline:none;
  resize: none;
}
.mybutton {
  border:none;
  border-radius:10px;
  background-color:#87B14A;
  color:white;
  font-size:18px;
  text-align: center;
  height: 40px;
}

</style>
