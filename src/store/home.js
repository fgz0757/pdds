import instance from "@/api";
export default {
    namespaced: true,
    state: () => ({
      navList: [],
      contNav: [],
      subsidyArr: [],
      shopList: [],
    }),
    mutations: {
        navFn(state,data) {
            state.navList = data;
        },
        homeFn(state, data) {
            state.contNav = data;
        },
        subsidyFn(state, data) {
            state.subsidyArr = data;
        },
        shopFn(state, data) {
            state.shopList = data;
        }
    },
    actions: {
        async getNavs(context) {
            let { data } = await instance.get("/navs");
            context.commit("navFn",data)
          },
          async homeCon(context) {
            let { data } = await instance.get("/homeNav");
            context.commit("homeFn",data)
            
          },
          async subsidy(context) {
            let { data } = await instance.get("/subsidyCon");
            context.commit("subsidyFn",data)
            
          },
          async shopping(context) {
            let { data } = await instance.get("/shops");
            context.commit("shopFn",data)
          },
    },
    getters: {
        
    }
}