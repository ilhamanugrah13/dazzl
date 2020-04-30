/* eslint-disable no-underscore-dangle, no-param-reassign, no-shadow, consistent-return */
// export const strict = false
export const state = () => ({
  cart: []
})

export const mutations = {
  SET_CART (state, payload) {
    state.cart = payload
  }
}

export const actions = {
  addToCart ({ state, commit }, payload) {
    const cartData = (state.cart).slice()
    cartData.push(payload)

    commit('SET_CART', cartData)
  },
  removeToCart ({ state, commit }, payload) {
    let cartData = (state.cart).slice()

    cartData = cartData.filter(item => item.name !== payload)

    commit('SET_CART', cartData)
  },
  removeAll ({ commit }) {
    commit('SET_CART', [])
  }
}
