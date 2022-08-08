<template>
  <div id="APP">
    <main class="main-Nave-bar">
      <Navebar />
    </main>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navebar from './components/Navebare/Navebar.vue'
export default {
  components: {
    Navebar,
  },
  async beforeCreate() {
    await this.$store.dispatch('authUser', localStorage._tk)
  },
}
</script>
