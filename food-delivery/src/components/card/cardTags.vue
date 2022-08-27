<template>
  <div class="Tag" :class="{ styleActive: isactive }" @click="addTags">
    <img :src="imag" alt="" />
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: ['name', 'imag'],
  data() {
    return {
      isactive: false,
    }
  },
  methods: {
    addTags() {
      this.isactive = !this.isactive
    },
  },
}
</script>

<style scoped>
.Tag {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 0.25rem solid var(--bordder-color-2);
  border-radius: 1rem;
  width: 10%;
}
.Tag span {
  font-size: 1.4rem;
  font-weight: 600;
}
.Tag img {
  margin-bottom: 1rem;
  width: 2rem;
  height: 2rem;
}
/* hove */

.Tag:hover,
.Tag:active,
.styleActive {
  background-color: var(--btn-bgcolor);
  border: 0.25rem solid var(--bordder-color-1);
}

.styleActive span {
  color: var(--text-color-span);
  font-weight: 500;
}
</style>

//
///////////////////////////////////media/////////////////////////////////////////////

<style scoped>
@media (max-width: 37.5em) {
  .Tag {
    padding: 1rem;
    width: 20%;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up (600 / 16 = 37.5)) */
@media screen and (min-width: 37.5em) and (max-width: 46.87em) {
  .Tag {
    padding: 1rem;
    width: 25%;
  }
}
/* Medium devices (landscape tablets, 768px and up (46.87) */
@media screen and (min-width: 46.87em) and (max-width: 62em) {
  .Tag {
    padding: 1rem;
    width: 10%;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media screen and (min-width: 62em) and (max-width: 75em) {
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media screen and (min-width: 75em) {
}
</style>
