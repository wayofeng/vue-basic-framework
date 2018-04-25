<template>
  <div class="product-list">
    <c-product-list :productListData="productList"></c-product-list>
  </div>
</template>
<script>
import cProductList from '@/components/product/c-product-list'
export default {
  data() {
    return {
      productList: [1, 2, 3, 4, 5, 6, 7, 8],
    }
  },
  components: {
    cProductList
  },
  created () {
    this.$store.dispatch('testStore', 'test')
  }
};
</script>

