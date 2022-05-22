<template>
  <div>
    <Search></Search>
    <div>这是谈话页面</div>
    <tabBar />
  </div>
</template>
<script>
import tabBar from "../components/tabBar.vue";
import Search from "../components/search.vue";
export default {
  name: "TalkView",
  components: {
    tabBar,
    Search
  },
};
</script>
<style lang="less" scoped>
</style>