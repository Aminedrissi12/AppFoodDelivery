<template>
  <div id="APP">
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  async beforeCreate() {
    await this.$store.dispatch('authUser', localStorage._tk)
  },
}
</script>
