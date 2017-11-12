<template>
  <div class="container">
    <div id="notification">
      <div class="alert" :class="{'alert-danger': result.Response, 'alert-success': result[toCurrency]}" role="alert" v-show="show">
          <button type="button" class="close" aria-label="Close" v-on:click="close">
              <span aria-hidden="true">&times;</span>
          </button>
          <span v-if="result.Response === 'Error'">{{result.Message}}</span>
          <span v-else>
            Exchange Rate between <strong>{{fromCurrency}}</strong> and <strong>{{toCurrency}}</strong> is <strong>{{result[toCurrency]}}</strong>.
          </span>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="fromCurrency">From currency</label>
            <input type="text" v-model="fromCurrency" class="form-control" id="fromCurrency" name="fromCurrency" placeholder="Enter from currency">
          </div>
          <div class="form-group">
            <label for="toCurrency">To currency</label>
            <input type="text" v-model="toCurrency" class="form-control" id="toCurrency" name="toCurrency" placeholder="Enter to currency">
          </div>
          <button type="submit" class="btn btn-primary" @click.prevent="getCurrency">Get currency</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormPage',
  data () {
    return {
      result: '',
      show: false
    }
  },
  methods: {
    getCurrency: function () {
      this.$store.dispatch('getCurrency').then((response) => {
        this.result = response.data
        this.show = true
      }).catch((error) => {
        this.result = error.response.data
      })
    },
    close: function () {
      this.show = false
    }
  },
  computed: {
    fromCurrency: {
      get: function () {
        return this.$store.state.currencies.from
      },
      set: function (value) {
        this.$store.dispatch('setCurrency', {
          currency: 'from',
          value: value
        })
      }
    },
    toCurrency: {
      get: function () {
        return this.$store.state.currencies.to
      },
      set: function (value) {
        this.$store.dispatch('setCurrency', {
          currency: 'to',
          value: value
        })
      }
    }
  }
}
</script>

<style>
</style>
