<template>
  <div class="home">
    <router-view></router-view>
    <c-tabbar></c-tabbar>
  </div>
</template>
<script>
import cTabbar from "@/components/common/c-tabbar";
export default {
  components: {
    cTabbar
  }
};
</script>
<style lang="scss" scoped>
.home {
  font-size: 20px;
}
</style>
