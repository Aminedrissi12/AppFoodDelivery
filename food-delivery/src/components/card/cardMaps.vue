<template>
  <div class="Maps row">
    <div class="maps-card">
      <maps-card></maps-card>
    </div>
    <div class="col--address">
      <div class="col--address-h4">
        <h4>New York</h4>
        <span>New York State, USA</span>
      </div>
      <div class="col--address-span">
        <span>4517 Washington Ave.</span>
        <span>Manchester, 11004</span>
      </div>
    </div>
    <div class="maps-Icon">
      <mdicon name="dots-vertical" />
    </div>
  </div>
</template>

<script>
import MapsCard from '../googleMaps/MapsCard.vue'
export default {
  components: {
    MapsCard,
  },
}
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid var(--bordder-color-2);
  border-radius: 1.6rem;
  padding: 1rem 1rem;
}
.col--address {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 1.5rem;
  padding: 0 1rem;
}
.col--address-h4 {
  margin-bottom: 1.5rem;
}
.col--address-h4 > span {
  font-size: 1.4rem;
}
.col--address-span {
  display: flex;
  flex-direction: column;
}
.col--address-span > span {
  font-size: 1.5rem;
}
.maps-Icon {
}
</style>
