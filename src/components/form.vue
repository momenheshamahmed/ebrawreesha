<template>
<div>
  <div class="container">
    <div class="col-md-12">
      <h1>contact us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <form>
            <input type="text" v-model="message.name" class="col-md-8 col-sm-10" placeholder="Name" required>
            <input type="email" v-model="message.email" class="col-md-8 col-sm-10" placeholder="Email@example.com" required>
            <input type="number" v-model="message.number" class="col-md-8 col-sm-10" placeholder="01xxxxxxxxx" required>
            <input type="text" v-model="message.company" class="col-md-8 col-sm-10" placeholder="company name">
            <label class="col-md-12 labelt">bean bag</label>
            <select class="col-md-10" name="beanbags"  v-model="message.beanbags">
                <option v-for="bean in beanbags"> {{ bean }}</option>
            </select>
            <label class="col-md-12 labelt">colors</label>
            <select class="col-md-10" name="colors" v-model="message.color">
                <option v-for="color in colors" class="color1"  > {{ color }}</option>
            </select>
            <textarea v-model="message.text" placeholder="write your comment" class="col-md-10"></textarea>
            <button class="col-md-4 col-md-offset-8" v-on:click="postdata">send now</button>
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
        text: '',
        beanbags: '',
        color: ''

      },
      beanbags: ['Mega Pilow', 'Pilow', 'Aloha Sofa', 'E-chair', 'The Throne', 'The Donut', 'Standard Family', 'Standard Family+', 'Baby b'],
      colors: ['color1', 'color2', 'color3', 'color4'],
      submitied: false
    }
  },
  methods: {
  postdata: function() {
    this.$http.post('https://ebraa-w-reesha.firebaseio.com/beanbags.json', this.message).then(function(data) {
      console.log(data);
      submitied = true  
    })
  }
}
}
</script>

<style scoped>

input, select {
  height: 40px;
}
textarea, input, select {
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
  font-size:35px;
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
input, select, textarea, button {
  outline:none;
}
select option {
  color:#F3A43C;
}
.labelt {
  color:black;
  font-size:18px;
  font-family:'Open Sans';
  padding: 0;
  text-transform: uppercase;
  color:#F3A43C;
  width:100%;
}
@media screen and (max-width:1000px) {

  input, select {
    width:90%;
  }
  textarea {
    width:100%;
  }

}

</style>
