<template>
  <div class="log-in">
    <div class="row">
      <!-- ////////////////////////////////lift content///////////////////////////// -->
      <layoutLogin />
      <!-- //////////rigth content //////////////////////////////////////////////////-->
      <rigthContent />
    </div>
  </div>
</template>
//////////////////////////////////////////script///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
<script>
import layoutLogin from '@/components/layout/login and signup/layoutLogin.vue'
import rigthContent from '@/components/layout/login and signup/rigthContent.vue'
export default {
  data() {
    return {}
  },
  components: {
    layoutLogin,
    rigthContent,
  },
}
</script>
///////////////////////////////////////////style///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
<style scoped>
.log-in {
  margin: 0 0 0 0;
  background-color: var(--bag-color-with);
  width: 100%;
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
}
.row {
  display: flex;
  flex-direction: row;
}
</style>
