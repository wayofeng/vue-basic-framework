<template>
  <div id="app">
    <router-view v-if="!$route.meta.keepAlive">
    </router-view>
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view>
      </router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>

</style>
