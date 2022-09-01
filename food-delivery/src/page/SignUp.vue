<template>
  <div class="log-in">
    <div class="row">
      <!-- ////////////////////////////////lift content///////////////////////////// -->
      <layoutSignUp />
      <!-- //////////rigth content //////////////////////////////////////////////////-->
      <rigthContent />
    </div>
  </div>
</template>
//////////////////////////////////////////script///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
<script>
import layoutSignUp from '@/components/layout/login and signup/layoutSignUp.vue'
import rigthContent from '@/components/layout/login and signup/rigthContent.vue'
export default {
  components: {
    layoutSignUp,
    rigthContent,
  },
}
</script>
///////////////////////////////////////////style///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
<style scoped>
.log-in {
  background-color: var(--bag-color-with);
  width: 100%;
}
.row {
  display: flex;
  flex-direction: row;
}
</style>
///////////////////// media query //////////////////
<style scoped>
@media (max-width: 37.5em) {
}
/* Small devices (portrait tablets and large phones, 600px and up (600 / 16 = 37.5)) */
@media screen and (min-width: 37.5em) and (max-width: 46.87em) {
}
/* Medium devices (landscape tablets, 768px and up (46.87) */
@media screen and (min-width: 46.87em) and (max-width: 62em) {
}
/* Large devices (laptops/desktops, 992px and up) */
@media screen and (min-width: 62em) and (max-width: 75em) {
  .log-in {
    margin: 0 0 0 0;
    background-color: var(--bag-color-with);
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media screen and (min-width: 75em) {
  .log-in {
    margin: 0 0 0 0;
    background-color: var(--bag-color-with);
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
  }
}
</style>
