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
    addProduct(state, custumer) {
      state.listProducts.push(custumer);
    },
    removeProduct(state, custumer) {
      state.listProducts.splice(custumer, 1);
    },
    editProduct(state, custumer) {
      state.listProducts[custumer.index] = custumer.params;
    },
  },
})
