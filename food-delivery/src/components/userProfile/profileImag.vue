<template>
  <div>
    <img :src="img" alt="profail" v-if="img" />
    <img :src="userImag" alt="profail" v-if="!img" />
  </div>
</template>

<script>
export default {
  props: ['img'],
  data() {
    return {
      userImag:
        'https://firebasestorage.googleapis.com/v0/b/find-coachse.appspot.com/o/profileImage%2F1662140421724-image.jpg?alt=media&token=be3242cb-0fe7-41dd-a035-2c8b0f2cf9f8',
    }
  },
  created() {
    console.log(this.img)
  },
}
</script>

<style scoped>
div {
  border-radius: 1.6rem;
  padding: 0.2rem;
  height: 4.7rem;
  border: 0.3rem solid var(--bordder-color-2);
}
img {
  border-radius: 1.6rem;
  width: 4.7rem;
  height: 4.7rem;
}

div:hover {
  border: 0.3rem solid var(--bordder-color-1);
}

@media (max-width: 37.5em) {
  div {
    height: 4rem;
  }
  img {
    width: 4rem;
    height: 4rem;
  }
}
</style>
