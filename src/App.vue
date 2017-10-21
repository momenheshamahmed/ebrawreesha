<template>
  <div id="app" >
    <div class="">
      <div class="">
        <myheader></myheader>
        <router-view/>
      </div>
    </div>
    <myfooter></myfooter>

  </div>

</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  box-sizing:border-box;
}
#app {
  font-family:'Open Sans', 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
