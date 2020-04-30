<template>
  <div class="container">
    <h2 class="hero-body heading-section has-text-centered">
      checkout
    </h2>
    <div
      v-if="cartList.length > 0"
      class="checkout-section"
    >
      <ui-buy-list
        v-for="(cart, i) in cartList"
        :key="i"
        :title="cart.name"
        :image="cart.image"
        :price="cart.price"
      />
      <div class="total">
        <p>
          <span class="is-pulled-left">Total</span>
          <span class="is-pulled-right">{{ priceFormat(totalPrice) }}</span>
        </p>
      </div>
      <div class="has-text-centered">
        <b-button
          class="btn-purchase"
          @click="success"
        >
          Purchase
        </b-button>
      </div>
    </div>
    <p v-else class="hero-body has-text-centered">
      there're no items to buy
    </p>
  </div>
</template>

<script>
import BuyList from '@/components/BuyList'
import { defaultMoneyFormat } from '@/utils/moneyFormat'

export default {
  components: {
    UiBuyList: BuyList
  },
  computed: {
    cartList () {
      return this.$store.state.cart
    },
    totalPrice () {
      const priceCart = this.cartList.map((item) => {
        return parseInt(item.price, 10)
      })

      const total = priceCart.reduce((total, amount) => total + amount)
      return total
    }
  },
  methods: {
    priceFormat (price) {
      return defaultMoneyFormat(price)
    },
    success () {
      this.$buefy.toast.open({
        message: 'Purchase finish',
        type: 'is-success'
      })
      this.$store.dispatch('removeAll')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.checkout-section {
  margin-bottom: 20px;
}

.total {
  margin: 20px 0;
  padding: 10px 0;
  border-top: 1px solid black;
}

.btn-purchase {
  border-radius: 0;
  background: black;
  color: white;
  border: none;

  &:hover {
    background: pink;
  }
}
</style>
