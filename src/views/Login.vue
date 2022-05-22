<template>
  <div class="box">
    <div class="pic">
      <img src="https://funimg.pddpic.com/personal/login_footer.png" />
    </div>
    <div class="btn">
      <van-button
        icon="phone-o"
        type="info"
        color="#ffbb00"
        size="alrge"
        @click="subFn"
      >
        手机登录
      </van-button>
    </div>
    <p>
      <van-icon name="info" color="#25b513" />
      <span>平台用户信息安全</span>
      <img src="https://funimg.pddpic.com/personal/brand_picc_new.png" alt="" />
      <span>承保</span>
    </p>
    <div class="box1" v-if="show">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ pattern, required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ pattern, required: true, message: '请填写密码' }]"
        />
        <div class="cont">
          <van-button type="danger" native-type="submit"
            >同意协议并登录</van-button
          >
          <van-button plain type="danger" @click="prev">返回</van-button>
          <p><span>登录即表示同意</span>服务协议与隐私政策</p>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      username: "",
      password: "",
      pattern: /\w{6}/,
    };
  },
  created() {
    this.newFn = this.fDou(this.fdFn, 1000);
  },
  methods: {
    subFn() {
      this.newFn();
    },
    fdFn() {
      this.show = true;
    },
    onSubmit(values) {
      if (values.username == "admins" && values.password == "135791") {
        localStorage.setItem("token", values.username);
        const path = this.$router.currentRoute.params.id || "/home";
        this.$router.push(path);
        this.show = false;
      } else {
        this.$notify("用户名或密码错误");
      }
    },
    prev() {
      this.show = false;
    },
  },
};
</script>
<style lang="less" scoped>
.box {
  height: 100%;
  padding-top: 118px;
  box-sizing: border-box;
  text-align: center;
  background: #f4f4f4;
  .pic {
    img {
      width: 138px;
      height: 50px;
    }
  }
  .btn {
    margin: 100px 0 30px;
    .van-button {
      width: 80%;
      border-radius: 5px;
    }
  }
  p {
    font-size: 12px;
    color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 12px;
    }
  }
  .box1 {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: #f4f4f4;
    padding-top: 10px;
    position: absolute;
    left: 0;
    top: 0;
    .van-field {
      height: 64px;
    }
    .cont {
      padding: 0 10px;
      .van-button {
        width: 100%;
        border-radius: 5px;
        font-size: 18px;
        margin-top: 10px;
      }
      p {
        font-size: 12px;
        color: #58595b;
        margin-top: 20px;
        span {
          color: #9c9c9c;
        }
      }
    }
  }
}
</style>