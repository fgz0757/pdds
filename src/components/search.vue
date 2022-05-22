<template>
  <div>
    <van-search
      v-model="value"
      :placeholder="mess"
      input-align="left"
      shape="round"
    />
  </div>
</template>
<script>
export default {
  name: "Search",
  props: ["mess"],
  data() {
    return {
      value: "",
    };
  },
};
</script>
<style lang="less" scoped>
.van-search__content {
  padding-left: 130px;
}
</style>