<template>
    <div class="product-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" v-if="productListData.length">
        <div class="product-list-item" v-for="(item, index) in productListData" :key="index">
            {{item}}
        </div>
    </div>
</template>
<script>
export default {
  props: {
    productListData: {
      // 商品列表数据
      type: Array,
      default: []
    }
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    loadMore() {}
  }
};
</script>

