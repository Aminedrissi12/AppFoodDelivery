<template>
  <div class="Maps">
    <GMapMap
      :center="center"
      :zoom="5"
      map-type-id="terrain"
      class="Maps__comp"
      style="
        width: 110px;
        height: 90px;
        border-radius: 1.6rem;
        font-size: 9px;
        line-height: 13px;
      "
    >
      <GMapCluster>
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
      </GMapCluster>
    </GMapMap>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      center: { lat: 33.986183, lng: -6.852132 },
      markers: [
        {
          position: {
            lat: 33.986183,
            lng: -6.852132,
          },
        }, // Along list of clusters
      ],
    }
  },
}
</script>

<style scoped>
.Maps {
  border-radius: 1.6rem;
}
</style>

<style>
.Maps__comp > .vue-map > div > * {
  margin: -10px 0;
  font-size: -20px;
}
.Maps__comp > .vue-map > div {
  font-size: 1rem;
}
</style>
