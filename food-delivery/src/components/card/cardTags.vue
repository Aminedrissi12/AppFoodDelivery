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

  padding: 1rem 5.5rem;
  border: 0.3rem solid var(--bordder-color-2);
  border-radius: 1rem;
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

.Tag:hover {
  background-color: var(--btn-bgcolor);
  border: 0.3rem solid var(--bordder-color-1);
}
/* active */
.Tag:active {
  background-color: var(--btn-bgcolor);
  border: 0.3rem solid var(--bordder-color-1);
}

.styleActive {
  background-color: var(--btn-bgcolor);
  border: 0.3rem solid var(--bordder-color-1);
}

.styleActive span {
  color: var(--text-color-span);
  font-weight: 500;
}
</style>
