import Vue from 'vue'
import Vuex from 'vuex'
import olfservice from '../services/olfservice';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    cart: [],
    itemsInCart: 0,
    currentCustomerNr: 111
  },
  mutations: {
    addArticles(state, data) {
      state.articles = data;
    },
    clearWords(state){
      state.articles = [];
    },
    addArticleToCart(state, data) {
      state.cart.push(data)
    },
    addItemToCart(state){
      state.itemsInCart++
    }
  },
  actions: {
    updateArticles(state) {
      olfservice.getArticles()
      .then(articles => state.commit("addArticles", articles))
    },

    updateCart(state, article) {
      this.$store.commit("addArticleToCart", article )
    }
  },
  modules: {
  }
})
