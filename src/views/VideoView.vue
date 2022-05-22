<template>
  <div>
    <Search></Search>
    <div>这是video页面</div>
    <tabBar />
  </div>
</template>
<script>
import tabBar from "../components/tabBar.vue";
import Search from "../components/search.vue";
export default {
  name: "VideoView",
  components: {
    tabBar,
    Search
  },
};
</script>
<style lang="less" scoped>
</style>