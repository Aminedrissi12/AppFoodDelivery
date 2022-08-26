<template>
  <div class="geolocation">
    <h3>Geolocation</h3>
    <span>this is lat : {{ lat }}</span>
    <span>this is lng : {{ lng }}</span>
  </div>
</template>

<script>
export default {
  name: 'DemoComponent',
  data() {
    return {
      lat: 0,
      lng: 0,
    }
  },
  created() {
    this.$getLocation()
      .then((coordinates) => {
        this.lat = coordinates.lat
        this.lng = coordinates.lng
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style scoped>
.geolocation {
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
}
</style>
