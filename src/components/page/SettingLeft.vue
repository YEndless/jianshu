<template>
  <div class="row">
    <div class="asize offset-2">
      <div class="">
        <div>
          <button class="bac">
            <a href="/setting/basic">
              <b-img src="../../static/img/basic.png"/>
              <span class="name">基础设置</span> <!---->
            </a>
          </button>
        </div>
        <div>
          <button class="bac">
            <a href="/setting/profile" class="left">
              <b-img src="../../static/img/profile.png"/>
              <span class="name">个人认证</span> <!---->
            </a>
          </button>
        </div>
        <div>
          <button class="bac">
            <a href="/setting/weibo-auth">
              <b-img src="../../static/img/weibo-auth.png"/>
              <span class="name">微博认证</span> <!---->
            </a>
          </button>
        </div>
        <div>
          <button class="bac">
            <a href="/setting/blacklist">
              <b-img src="../../static/img/blacklist.png"/>
              <span class="name">黑名单</span> <!---->
            </a>
          </button>
        </div>
        <div>
          <button class="bac">
            <a href="/setting/rewarding-setting">
              <b-img src="../../static/img/reward-setting.png"/>
              <span class="name">赞赏设置</span> <!---->
            </a>
          </button>
        </div>
        <div class="bac">
          <button class="bac">
            <a href="/setting/account-setting">
              <b-img src="../../static/img/account-setting.png"/>
              <span class="name">账号管理 </span> <!---->
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SettingLeft"
    }
</script>

<style scoped>
  .row {
    padding: 30px 0;
  }
  .set{
    margin-left: 33.33333%;
  }
  .bac{
    width: 263px;
    height: 50px;
    background:#000;
    text-align: left;
    background-color: white;
    border: none;
  }
  .bac:hover{
    background: #f0f0f0;
  }
  .menu {
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 700;
  }
  .center{
    text-align: center;        /*文字水平居中对齐*/
    line-height: 200px;        /*设置文字行距等于div的高度*/
  }
  .name {
    color: black;
    padding-top: 5px;
  }
</style>
