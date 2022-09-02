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
        'https://firebasestorage.googleapis.com/v0/b/find-coachse.appspot.com/o/profileImage%2F1662133016714-WhatsApp%20Image%202022-05-22%20at%204.42.19%20PM.jpeg?alt=media&token=b8c69e41-5589-4b97-a750-0a64a28ab22e',
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
