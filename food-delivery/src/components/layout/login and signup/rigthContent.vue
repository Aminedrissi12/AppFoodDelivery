<template>
  <div class="log-in-col-2" v-if="rigthCont">
    <!-- ------------------------------------------------- -->
    <div class="colm-2">
      <div class="row__imag">
        <img class="row__imag-1" :src="images.reviews" alt="reviews" />
        <img class="row__imag-2" :src="images.squared" alt="squared" />
        <img class="row__imag-3" :src="images.horizontal" alt="horizontal" />
      </div>
    </div>
    <!-- ------------------------------------------------ -->
    <div class="reviews">
      <h1>Leave reviews for all meals</h1>
      <p>
        Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus
        molestiae, eirmod assentior eum ne, et omnis antiopam mel.
      </p>
      <div class="dot">
        <div></div>
        <div class="dot-1"></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import squared from '@/assets/image  login page/squared.png'
import reviews from '@/assets/image  login page/reviews.png'
import horizontal from '@/assets/image  login page/horizontal.png'
export default {
  data() {
    return {
      images: { squared, reviews, horizontal },
      windowWidth: null,
      rigthCont: true,
    }
  },
  methods: {
    checkWidth() {
      this.windowWidth = window.innerWidth

      if (this.windowWidth <= 768) {
        this.rigthCont = false
      } else {
        this.rigthCont = true
      }
    },
  },
  created() {
    window.addEventListener('resize', this.checkWidth)
    this.checkWidth()
  },
}
</script>

<style scoped>
.log-in-col-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2;
  background-color: var(--bag-color-blue-log);
  justify-content: space-around;
}

/* ------------------------------------------------------------------- */

.colm-2 {
  position: relative;
}

.row__imag {
  width: 70rem;
  height: 50rem;
}
.row__imag-1 {
  left: 4rem;
  width: 30rem;
  height: 40rem;
  border-radius: 1rem;
  z-index: 100;
}
.row__imag-2 {
  top: 5rem;
  right: 1rem;
  width: 30rem;
  height: 26rem;
  border-radius: 1rem;
  z-index: 300;
}
.row__imag-3 {
  top: 36rem;
  left: 1rem;
  width: 61rem;
  height: 12rem;
  border-radius: 1rem;
  z-index: 200;
}

.row__imag-1,
.row__imag-2,
.row__imag-3 {
  position: absolute;
  cursor: pointer;
  transition: 0.3s ease-in;
  box-shadow: -1rem 1.5rem 4rem rgba(0, 0, 0, 0.4);
}

/* hover */
.row__imag-1:hover,
.row__imag-2:hover,
.row__imag-3:hover {
  z-index: 400;
  transform: scale(1.05);
}

/*------------------------reviews---------------------------------- */

.reviews {
  display: flex;
  width: 70rem;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 1rem 0;
  justify-content: flex-end;
}
.reviews h1 {
  color: var(--colo-h1);
}
.reviews p {
  color: var(--colo-h1);
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1.5rem;
}
.dot {
  display: flex;
  flex-direction: row;
  margin-top: 3.5rem;
}
.dot div {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
}
.dot > .dot-1 {
  background-color: #fff;
}
.dot div:not(:last-child) {
  margin-right: 0.6rem;
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
  .colm-2 {
    position: relative;
    margin: 8rem 0;
  }
  .row__imag-1 {
    width: 24rem;
    height: 37rem;
    left: 11rem;
  }
  .row__imag-2 {
    width: 22rem;
    height: 20rem;
  }
  .row__imag-3 {
    width: 44rem;
    height: 10rem;
    top: 32rem;
    left: 7rem;
  }
  .row__imag {
    width: 52rem;
    height: 42rem;
  }
  .reviews {
    width: 40rem;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media screen and (min-width: 62em) and (max-width: 75em) {
  .row__imag-1 {
    width: 23rem;
    height: 32rem;
  }
  .row__imag-2 {
    width: 26rem;
    height: 21rem;
  }
  .row__imag-3 {
    width: 52rem;
    height: 12rem;
    top: 29rem;
    left: 1rem;
  }
  .row__imag {
    width: 52rem;
    height: 34rem;
  }
  .reviews {
    width: 40rem;
    height: 18.5rem;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media screen and (min-width: 75em) {
  .row__imag {
    width: 70rem;
    height: 37rem;
  }
  .reviews {
    width: 70rem;
    height: 17rem;
  }
  .row__imag-1 {
    width: 29rem;
    height: 36rem;
  }
  .row__imag-2 {
    width: 30rem;
    height: 26rem;
  }
  .row__imag-3 {
    width: 60rem;
    height: 13rem;
    top: 32rem;
    left: 1rem;
  }
}
</style>
