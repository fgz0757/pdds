import Vue from "vue";
import Vuex from "vuex";
import Home from "../store/home";
import Type from "../store/type";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home:Home,
    type: Type,
  },
});
