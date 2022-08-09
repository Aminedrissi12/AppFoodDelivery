<template>
  <div class="icon-shopping-outlin">
    <div :class="[activeClass]">
      <mdicon name="shopping-outline" />
    </div>
    <div class="number" v-if="numberInCard">
      <span>2</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberInCard: true,
      activeClass: 'icon_shopping2',
    }
  },
}
</script>

<style scoped>
.number {
  position: relative;
}
.number > span {
  font-size: 1rem;
  color: #fff;
  border: 0.25rem solid #fff;
  background-color: var(--btn-bg-color);
  padding: 0.1rem 0.5rem;
  border-radius: 40%;
  position: absolute;
  z-index: 10;
  top: -3rem;
  left: 1.8rem;
}
</style>
// /////global styles /////
<style>
.icon-shopping > .mdi-shopping-outline > svg {
  width: 3rem;
  height: 3rem;
  color: #c7c8d2;
}
.icon_shopping2 > .mdi-shopping-outline > svg {
  width: 3rem;
  height: 3rem;
  color: #c7c8d2;
  color: var(--btn-bg-color);
}
</style>
