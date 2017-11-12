import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currencies: {
      from: '',
      to: ''
    },
    isShownAlert: false
  },
  mutations: {
    SET_CURRENCY: function (state, payload) {
      state.currencies[payload.currency] = payload.value
    }
  },
  actions: {
    setCurrency: function (context, payload) {
      context.commit('SET_CURRENCY', payload)
    },
    getCurrency: function (context) {
      return axios.get('https://min-api.cryptocompare.com/data/price', {
        params: {
          fsym: context.state.currencies.from,
          tsyms: context.state.currencies.to
        }
      })
    }
  }
})

export default store
