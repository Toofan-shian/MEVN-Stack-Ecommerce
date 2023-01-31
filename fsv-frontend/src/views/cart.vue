<template>
  <div class="page-wrap">
    <h1>Cart Page</h1>
      <productsList
        :products="products"
        @remove-from-cart="removeFromCart($event)"
      />
    <button id="checkout-button">Proceed To Checkout</button>
  </div>
</template>

<script>
import productsList from '../components/productsList.vue'
import axios from 'axios';

export default {
  name: 'cartPage',
  components: {
    productsList,
  },
  data() {
    return {
      products: null,
    }
  },
  methods: {
    async removeFromCart(productId) {
      const response = await axios.delete('/api/users/12345/cart/' + productId)
      const products = response.data;
      this.products = products;
    }
  },
  async created() {
    const response = await axios.get('/api/users/12345/cart')
    const products = response.data;
    this.products = products; 
  }

}
</script>

<style scoped>
  h1 {
    border-bottom: 1px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
    text-align: center;
  }



  #checkout-button {
    width: 100%;
  }




</style>