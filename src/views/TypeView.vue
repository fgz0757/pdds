<template>
  <div>
    <Search :mess="mess"></Search>
    <div class="box">
      <div class="left">
        <div>
          <van-sidebar v-model="activeKey">
            <template v-for="(el, i) in arrList">
              <van-sidebar-item :title="el.title" @click="fn(i)" />
            </template>
          </van-sidebar>
        </div>
      </div>
      <div class="right">
        <div>
          <div :key="el.id" v-for="el in child">
            <img :src="el.src" />
            <p>{{ el.title }}}</p>
          </div>
        </div>
      </div>
    </div>
    <tabBar />
  </div>
</template>
<script>
import tabBar from "../components/tabBar.vue";
import Search from "../components/search.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "TypeView",
  data() {
    return {
      mess: "分类页搜索",
      activeKey: 0,
    };
  },
  components: {
    tabBar,
    Search,
  },
  created() {
    this.navList();
  },
  computed: {
    ...mapState("type", ["arrList", "child"]),
  },
  methods: {
    ...mapMutations("type", ["fn"]),
    ...mapActions("type", ["navList"]),
  },
};
</script>
<style lang="less" scoped>
.box {
  height: calc(100vh - 104px);
  display: flex;
  .left,
  .right {
    height: 100%;
    overflow: scroll;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .right {
    width: calc(100vw - 80px);
    & > div {
      display: flex;
      flex-wrap: wrap;
      div {
        width: 33%;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        img {
          width: 56px;
          height: 56px;
        }
        p {
          font-size: 12px;
        }
      }
    }
  }
}
</style>