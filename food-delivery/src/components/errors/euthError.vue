<template>
  <transition name="error">
    <div name="side-bare" class="error" v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <mdicon class="close-icon" name="close" @click="colse" />
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
      <ul v_if="error">
        <li>{{ err }}</li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['errors', 'err'],
  data() {
    return {}
  },
  methods: {
    colse() {
      this.$emit('closePo')
    },
  },
}
</script>

<style scoped>
.close-icon {
  background-color: white;
  border-radius: 50%;
  color: var(--bordder-color-2);
  position: absolute;
  transform: translateX(2.5rem);
  cursor: pointer;
}

.error {
  position: absolute;
  z-index: 400;
  top: 0;
  left: 0;
  padding: 1rem 6rem 1rem 2rem;
  margin: 1rem 0 0 1rem;
  font-size: 1.3rem;
  color: var(--header-colo);
  background-color: var(--bag-color-blue-log);
  border-radius: 1rem;
}
.error b {
  font-size: 1.5rem;
}
.error ul {
  margin-top: 1rem;
}

.error li {
  list-style-type: none;
}

/* /////////////////////// */
.error-enter-active,
.error-leave-active {
  transition: 0.5s ease-in-out;
}

.error-enter-from,
.error-leave-to {
  transform: translateX(-35rem);
}
.error-enter-to,
.error-leave-from {
  transform: translateX(0);
}
</style>
