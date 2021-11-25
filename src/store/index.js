import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    supply: 40,
  },
  getters: {},
  actions: {},
  mutations: {
    dispenseProduct: (state) => {
      state.supply--;
    },
    restockProduct: (state) => {
      state.supply = 40;
    },
  },
});
