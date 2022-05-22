<template>
  <div class="home">
    <Search :mess="mess"></Search>
    <div class="navs">
      <van-tabs title-active-color="#ee0a24">
        <van-tab
          :key="i"
          v-for="(el, i) in navList"
          :title="el.title"
        ></van-tab>
      </van-tabs>
    </div>
    <div class="count">
      <div>
        <div class="contNav">
          <div class="List">
            <div :key="i" v-for="(el, i) in contNav">
              <div :key="obj.id" v-for="obj in el">
                <img :src="obj.src" />
                <p>{{ obj.title }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="subsidy">
          <div class="left">
            <img
              src="https://funimg.pddpic.com/brand_creation/b974124a-faaa-4c95-b074-e9c4eb6c9e31.png?imageView2/2/w/78/q/80/format/webp"
              alt=""
            />
            <h5>百亿补贴</h5>
            <span>大牌正品</span>
          </div>
          <img
            src="https://funimg.pddpic.com/recone/2020-09-10/ea56b47f-2ec2-4c95-9e8b-87d9ccc1cfc0.png?imageView2/2/w/1300/q/80/format/webp"
            style="width: 6px"
          />
          <div class="right">
            <div :key="el.id" v-for="el in subsidyArr">
              <img :src="el.src" alt="" />
              <p>￥{{ el.price }}</p>
            </div>
          </div>
        </div>
        <div class="shopping">
          <div :key="el.id" v-for="el in shopList" class="shop">
            <img :src="el.src" alt="" />
            <div class="shop-b">
              <p>{{ el.text }}</p>
              <div class="pList">
                <span v-if="el.p1" class="color">{{ el.p1 }}</span>
                <span v-if="el.p2">{{ el.p2 }}</span>
                <span v-if="el.p3">{{ el.p3 }}</span>
              </div>
              <div class="nums">
                <strong>￥{{ el.price }}</strong>
                <span>已拼{{ el.num }}+件</span>
                <div v-if="el.imgs">
                  <template v-for="val in el.imgs">
                    <img :src="val" alt="" />
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <tabBar />
  </div>
</template>

<script>
// import instance from "../api/index";
import tabBar from "../components/tabBar.vue";
import Search from "../components/search.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      mess: "首页搜索",
    };
  },
  computed: {
    ...mapState("home", ["navList", "contNav", "subsidyArr", "shopList"]),
  },
  components: {
    tabBar,
    Search,
  },
  created() {
    this.getNavs();
    this.homeCon();
    this.subsidy();
    this.shopping();
  },
  methods: {
    ...mapActions("home", ["getNavs", "homeCon", "subsidy", "shopping"]),
  },
};
</script>
<style lang="less" scoped>
.count {
  height: calc(100vh - 147px);
  background: #f4f4f4;
  overflow: auto;
  padding-bottom: 50px;
}
.contNav {
  height: 142px;
  padding: 10px 0;
  background: #fff;
  overflow: auto;
  border-top: 2px solid #777;
  .List {
    display: flex;
    & > div {
      width: 74px;
      flex-shrink: 0;
      div {
        height: 60px;
        text-align: center;
        margin-bottom: 10px;
        img {
          width: 40px;
          height: 40px;
        }
        p {
          font-size: 12px;
        }
      }
    }
  }
}
::-webkit-scrollbar {
  display: none;
}
.subsidy {
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  margin-top: 7px;
  .left {
    width: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
    }
    h5 {
      font-size: 14px;
      margin-bottom: 7px;
    }
    span {
      font-size: 12px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: space-around;
    div {
      width: 64px;
      text-align: center;
      img {
        width: 64px;
      }
      p {
        font-size: 14px;
        color: #e22e24;
      }
    }
  }
}
.shopping {
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .shop {
    width: 177px;
    height: 260px;
    border-radius: 5px;
    background: #fff;
    & > img {
      width: 177px;
      height: 177px;
    }
    .shop-b {
      padding: 0 8px;
      p {
        height: 16px;
        font-size: 14px;
        overflow: hidden;
      }
      .pList {
        font-size: 12px;
        color: #9c9c9c;
        margin: 5px 0 10px;
        span {
          margin-right: 5px;
        }
        .color {
          color: #e22e24;
        }
      }
      .nums {
        display: flex;
        font-size: 13px;
        color: #9c9c9c;
        letter-spacing: -1px;
        strong {
          color: #e22e24;
          margin-right: 5px;
        }
        div {
          position: relative;
          margin-left: 30px;
          img {
            width: 18px;
            height: 18px;
            border-radius: 50%;
          }
          img:first-child {
            position: absolute;
            left: -10px;
          }
        }
      }
    }
  }
}
</style>