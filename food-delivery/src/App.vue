<template>
  <div id="APP">
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  async beforeCreate() {
    await this.$store.dispatch('authUser', localStorage._tk)
  },
}
</script>
