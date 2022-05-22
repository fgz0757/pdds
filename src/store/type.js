import instance from "@/api";
export default {
    namespaced: true,
    state: () => ({
        arrList: [],
        child: [],
    }),
    mutations: {
        fn(state,x) {
            state.child = state.arrList[x].children;
        },
        contFn(state, data) {
            state.arrList = data;
            state.child = data[0].children;
        }
    },
    actions: {
        async navList(context) {
            let { data } = await instance.get("/navs");
            context.commit('contFn',data)
        },
    },
    getters: {
        
    }
}