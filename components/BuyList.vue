<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img
          :src="require(`@/assets/img/favorite/${image}`)"
          :alt="title"
        >
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <div class="columns">
          <div class="column is-10">
            <p>
              <strong>{{ title }}</strong>
              <br>
              {{ priceFormat(price) }}
            </p>
          </div>
          <div class="column">
            <b-numberinput v-model="qty" type="is-dark" />
          </div>
        </div>
      </div>
    </div>
    <div class="media-right">
      <button class="delete" @click="removeItem(title)" />
    </div>
  </article>
</template>

<script>
import { defaultMoneyFormat } from '@/utils/moneyFormat'

export default {
  name: 'BuyList',
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
    }
  },
  data () {
    return {
      qty: 1
    }
  },
  methods: {
    priceFormat (price) {
      return defaultMoneyFormat(price)
    },
    removeItem (name) {
      this.$store.dispatch('removeToCart', name)
    }
  }
}
</script>

<style>

</style>
