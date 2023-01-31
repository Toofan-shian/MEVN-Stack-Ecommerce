<template>
  <div class="page-wrap">
    <productsGrid
      :products="products"
    />
  </div>
</template>

<script>
import axios from 'axios';
import productsGrid from '../components/productsGrid.vue'

export default {
  name: 'productsPage',
  components: {
    productsGrid,
  },
  data() {
    return {
      title: 'products page',
      products: [],
    }
  },
  async created() {
    const result = await axios.get('/api/products');
    const products = result.data;
    this.products = products;
  }
}
</script>

<style scoped>

</style>