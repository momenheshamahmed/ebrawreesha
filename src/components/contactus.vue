<template>
<div>
  <div class="container">
    <div class="col-md-12">
      <h1>contact us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <form class="" action="index.html" method="post">
            <input type="text" v-model="message.name" class="col-md-8" placeholder="Name" required>
            <input type="email" v-model="message.email" class="col-md-8" placeholder="Email@example.com" required>
            <input type="number" v-model="message.number" class="col-md-8" placeholder="01xxxxxxxxx" required>
            <input type="text" v-model="message.company" class="col-md-8" placeholder="company name">
            <textarea v-model="message.text" placeholder="we wait your message" class="col-md-10"></textarea>
            <button class="col-md-4 col-md-offset-8">send now</button>
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
        number: '',
        company: '',
        text: ''
      }
    }
  }
}
</script>

<style scoped>

input {
  height: 40px;
}
textarea, input {
  border:2px solid #95989A;
  border-radius:10px;
  margin-bottom: 10px;
}
textarea {
  height:100px;
  resize: none;
}
button {
  background:#87B14A;
  height: 60px;
  color:white;
  font-size:20px;
  border-radius: 10px;
  border:none;
  margin:20px auto;

}
h1 {
  color:#F3A43C;
  text-transform: uppercase;
  font-weight:700;
  font-family: 'Open Sans';
}
p {
  font-family: 'Open Sans';
  font-weight: 500;
}
</style>
