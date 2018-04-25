<template>
  <div>首页</div>
</template>
<script>
export default {
  created () {
    this.$api.testApi().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

