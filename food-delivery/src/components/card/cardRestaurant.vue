<template>
  <div class="card">
    <div class="colum">
      <!-- ------------------colum_img---------------------- -->
      <div class="colum_img">
        <img :src="imageRestau" alt="photo restaurant" />
      </div>
      <!-- ------------------colum_title-------------------- -->
      <div class="colum_title">
        <h2>Burgers & Pizza</h2>
        <shopping-ou />
        <!-- <mdicon name="shopping-outline" /> -->
      </div>
      <!-- ------------------colum_praic_time--------------- -->
      <div class="colum_praic_time">
        <div class="colum_time row_center">
          <mdicon name="clock-outline" />
          <span> 40-60 min </span>
        </div>
        <!-- ///////////////////////// -->
        <div class="colum_praic row_center">
          <mdicon name="currency-usd" />
          <span> 24 min sum </span>
        </div>
      </div>
      <!-- -------------------colum_tags-------------------- -->
      <div class="colum_tags">
        <span>pezz</span>
      </div>
    </div>
  </div>
</template>

<script>
import imageRestau from '../../../src/assets/imgRstaurant/istanbul-breakfast.jpg'
import ShoppingOu from '../icon/shoppingOu.vue'
export default {
  components: {
    ShoppingOu,
  },
  data() {
    return {
      imageRestau,
    }
  },
}
</script>

<style scoped>
.colum_praic_time,
.colum_tags,
.colum_title {
  width: 90%;
  padding: 0 2rem;
}
/* ----------------------------------------------- */
.card {
  width: 32%;
  margin: 2rem 0;
  border: 1px solid #edeef2;
  border-radius: 16px;
}

.colum_img > img {
  border-radius: 16px 16px 0 0;
  width: 100%;
  height: 23rem;
}
/* -----------------colum_title-------------------- */
.colum_title {
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
/* -------------------colum_praic_time-------------- */
.row_center {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.colum_praic_time {
  display: flex;
  margin-top: 1rem;
}
.colum_time {
  margin-right: 1rem;
}
.colum_praic_time > .colum_time > span,
.colum_praic_time > .colum_praic > span {
  font-size: 1.5rem;
  color: #c7c8d2;
}
</style>

// /////global styles /////
<style>
.colum_time > .mdi-clock-outline > svg,
.colum_praic > .mdi-currency-usd > svg {
  margin-right: 0.3rem;
  width: 2rem;
  height: 2rem;
  color: #c7c8d2;
}
</style>

//
///////////////////////////////////media/////////////////////////////////////////////

<style scoped>
@media (max-width: 37.5em) {
  .card {
    width: 100%;
    margin: 2rem 0;
    border: 1px solid #edeef2;
    border-radius: 16px;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up (600 / 16 = 37.5)) */
@media screen and (min-width: 37.5em) and (max-width: 46.87em) {
  .card {
    width: 48%;
    margin: 2rem 0;
    border: 1px solid #edeef2;
    border-radius: 16px;
  }
}
/* Medium devices (landscape tablets, 768px and up (46.87) */
@media screen and (min-width: 46.87em) and (max-width: 62em) {
  .card {
    width: 47%;
    margin: 2rem 0;
    border: 1px solid #edeef2;
    border-radius: 16px;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media screen and (min-width: 62em) and (max-width: 75em) {
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media screen and (min-width: 75em) {
}
</style>
