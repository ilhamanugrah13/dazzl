<template>
  <div class="column">
    <img
      :src="require(`@/assets/img/${(!isFavorite) ? 'dummy' : 'favorite'}/${image}`)"
      :alt="title"
    >
    <div class="card-content">
      <div class="content has-text-centered">
        <p>{{ title }}</p>
        <p>{{ priceFormat(price) }}</p>
        <b-button
          v-if="isFavorite"
          class="btn-cart"
          @click="addToCart"
        >
          add to cart
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { defaultMoneyFormat } from '@/utils/moneyFormat'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    priceFormat (price) {
      return defaultMoneyFormat(price)
    },
    addToCart () {
      this.$store.dispatch('addToCart', {
        name: this.title,
        price: this.price,
        image: this.image
      })
    }
  }
}
</script>
