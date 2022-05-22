<template>
  <div class="tabBars">
    <van-tabbar v-model="active" active-color="#ee0a24" route>
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/video" icon="video-o">直播</van-tabbar-item>
      <van-tabbar-item to="/type" icon="cluster-o">分类</van-tabbar-item>
      <van-tabbar-item to="/talk" icon="chat-o">聊天</van-tabbar-item>
      <van-tabbar-item to="/my" icon="manager-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "tabBar",
  data() {
    return {
      active: 0,
    };
  },
};
</script>
<style lang="less" scoped>
</style>