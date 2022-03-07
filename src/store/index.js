import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listProducts: [],
  },
  mutations: {
    setListProducts(state, payload) {
      state.listProducts = payload;
    },
    addProducts(state, custumer) {
      state.listProducts.push(custumer);
    },
    removeProducts(state, custumer) {
      state.listProducts.splice(custumer, 1);
    },
    editarProduct(state, custumer) {
      state.listProducts[custumer.index] = custumer.params;
    },
  },
})
