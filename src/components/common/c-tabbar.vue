<template>
  <div class="tabbar">
    <mt-tabbar v-model="selected">
      <mt-tab-item :id="item.id" v-for="item in tabbarConfig" :key="item.id" :class="selected === item.id ? item.activeIcon : item.defaultIcon">
        {{item.title}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import tabbarConfig from '@/config/tabbar.config'
export default {
  data() {
    return {
      selected: tabbarConfig[0].id,
      tabbarConfig: ''
    };
  },
  created () {
    this.tabbarConfig = tabbarConfig
    const curRoute = tabbarConfig.filter(item => {
      return item.path === this.$route.path
    })[0]
    this.selected = curRoute.id
  },
  watch: {
    selected () {
      let path = this.tabbarConfig[this.selected].path
      this.$router.push(path)
    },
    '$route' () {
      console.log(this.$route.path)
    }
  }
};
</script>

