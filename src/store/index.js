import Vue from 'vue'
import Vuex from 'vuex'
import olfservice from '../services/olfservice';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    addArticles(state, data) {
      state.articles = data;
    },
    clearWords(state){
      state.articles = [];
    }
  },
  actions: {
    updateArticles(state) {
      olfservice.getArticles()
      .then(articles => state.commit("addArticles", articles))
    }
  },
  modules: {
  }
})
