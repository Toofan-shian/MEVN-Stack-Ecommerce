<template>
  <div id="page-wrap" v-if="product">
    <div id="img-wrap">
      <img :src="product.imageUrl">
    </div>
    <div id="product-details">
      <h1>{{ product.name }}</h1>
      <h3 id="price">${{ product.price }}</h3>
      <P>Average Rating: {{ product.averageRating }}</P>
      <button
        v-if="alreadyInCart"
        id="already-in-cart"
      >
        Item Already Added To Cart
      </button>
      <button
        v-else-if="!addedToCart"
        id="add-to-cart"
        @click="addToCart"
      >
        Add to Cart
      </button>
      <button
        v-else-if="addedToCart"
        id="added-to-cart"
      >
        Succecfully Added To Cart
      </button>
      <h4>Description</h4>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <notFoundPage v-else />
</template>

<script>
import axios from 'axios'
import notFoundPage from './notFoundPage.vue'

export default {
  name: 'productsDetailsPage',
  components: {
    notFoundPage,
  },
  data() {
    return {
      cartItemsIds: [],
      product: null,
      addedToCart: false,
    }
  },
  methods: {
    async addToCart() {
      const result = await axios.post(
        '/api/users/12345/cart',
        {productId: this.$route.params.id} 
      )
      this.addedToCart = true
      setTimeout(() => {
        this.$router.push('/')
      }, 1500)
    }
  },
  computed: {
    alreadyInCart() {
      return (this.cartItemsIds.includes(this.product.id))
    }
  },
  async created() {
    
    //this.product
    let response = await axios.get('/api/products/' + this.$route.params.id)
    const product = response.data;
    this.product = product;

    //user's cart items
    const cartItemsResponse = await axios.get('/api/users/12345/cart')
    this.cartItemsIds = cartItemsResponse.data.map( product => product.id)
  }
}
</script>

<style scoped>
  #page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
    margin: auto;
  }

  #img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  #product-details {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100%;
  }

  #added-to-cart {
    width: 100%;
    background-color: green;
  }

  #already-in-cart {
    width: 100%;
    background-color: rgb(0, 110, 0);
  }

  #price {
    position: absolute;
    top: 24px;
    right: 16px;
  }
</style>
