<template>
  <div class="grid-wrap">
    <singleProduct
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import singleProduct from './singleProduct.vue'

export default {
  name: 'productsGrid',
  data() {
    return {

    }
  },
  props: [
    'products',
  ],
  components: {
    singleProduct,
  },

}
</script>

<style scoped>
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}
</style>