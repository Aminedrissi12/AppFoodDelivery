<template>
  <div>
    <img :src="userImag" alt="profail" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userImag:
        'https://fooddelivery.saasdesign.io/assets/content/account-avatar.png',
    }
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
