<template>
  <div class="products-list">
    <productsListItem
      v-for="product in products"
      :key="product.id"
      :product="product"
      @remove-from-cart="$emit('remove-from-cart', $event)"
    />
    <h3 id="total-price">Total Price: ${{ totalPrice }}</h3>
  </div>
</template>

<script>
import productsListItem from './productsListItem.vue'

export default {
  components: {
    productsListItem,
  },
  props: [
    'products'
  ],
  computed: {
    totalPrice() {
      return this.products.reduce((sum, item) => sum += +item.price, 0)
    }
  }
}
</script>

<style scoped>
#total-price {
  padding: 16px;
  text-align: center;
}
</style>