import Vue from "vue";
//使用vant插件
import Vant from 'vant';
import 'vant/lib/index.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入防抖
import fDou from "./fangdou/index";
//使用窗口适应插件
import "amfe-flexible"
//全局样式清除
import "../src/css/reset.css"

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(fDou);
//使用mock
if (process.env.NODE_ENV === "development") {
  require("./mock/mock.js")
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
