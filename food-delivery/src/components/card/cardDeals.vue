<template>
  <div class="layout-D">
    <div class="row bgGl50" :class="{ colorGLBG: iSactive }">
      <div class="col-layout">
        <img :src="image" alt="" />
      </div>
      <!-- ---- -->
      <div class="col-1-layout">
        <div>
          <h2>{{ nameFood }}</h2>
          <div class="col-1-row">
            <span class="col-1-row-span" :class="{ colorGL: iSactive }">
              {{ discount }}</span
            >
            <span class="col-1-row-span" :class="{ colorGL: iSactive }">
              % OFF</span
            >
          </div>
        </div>
        <h4>{{ Type_of_food }}</h4>
      </div>
      <!-- ---- -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'image', 'nameFood', 'discount', 'Type_of_food'],
  data() {
    return {
      iSactive: null,
    }
  },
  created() {
    this.checkDiscount()
  },
  methods: {
    checkDiscount() {
      if (this.discount >= 50) {
        this.iSactive = true
      }
    },
  },
}
</script>

<style scoped>
.layout-D {
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-around;
}
.row {
  display: flex;
  align-items: center;
  width: 98%;
}
.col-1-layout {
  width: 50%;
  height: 13.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0 2rem 2rem;
}
.col-layout img {
  width: 30rem;
  height: 18.8rem;
}
.col-1-row span {
  font-size: 3rem;
  font-weight: 900;
}
.col-1-layout h4 {
  color: var(--colo-h4);
}
.bgGl50 {
  background-color: #f3f4ff;
  border-radius: 1.6rem;
}
.col-1-row-span {
  color: var(--text-color-span);
}

/* if condition for gl 50% */
.colorGLBG {
  background-color: #fff3ed;
}
.colorGL {
  color: #fd6d22;
}
</style>

//
///////////////////////////////////media/////////////////////////////////////////////

<style scoped>
@media (max-width: 37.5em) {
  .row {
    display: flex;
    flex-direction: column-reverse;
    padding-top: 3rem;
    height: 25rem;
  }
  .col-1-layout {
    display: flex;
    flex-direction: row;
    width: 90%;
    padding: 0;
  }
  .col-1-row span {
    font-size: 3.5rem;
    font-weight: 900;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up (600 / 16 = 37.5)) */
@media screen and (min-width: 37.5em) and (max-width: 46.87em) {
  .row {
    display: flex;
    flex-direction: column-reverse;
    padding-top: 3rem;
    height: 26rem;
  }
  .col-1-layout {
    display: flex;
    flex-direction: row;
    width: 78%;
    padding: 0;
  }
  .col-1-row span {
    font-size: 3.5rem;
    font-weight: 900;
  }
}
/* Medium devices (landscape tablets, 768px and up (46.87) */
@media screen and (min-width: 46.87em) and (max-width: 62em) {
  .row {
    display: flex;
    flex-direction: column-reverse;
    padding-top: 3rem;
    height: 69%;
  }
  .col-1-layout {
    display: flex;
    flex-direction: row;
    width: 78%;
    padding: 0;
  }
  .col-1-row span {
    font-size: 3.5rem;
    font-weight: 900;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media screen and (min-width: 62em) and (max-width: 75em) {
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media screen and (min-width: 75em) {
}
</style>
