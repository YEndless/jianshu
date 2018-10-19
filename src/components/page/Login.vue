<template>
<div class="sign">
  <div class="logo">
    <a href="/"><img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt="Logo"></a>
  </div>
  <div class="main">


    <h4 class="title">
      <div class="normal-title">
        <a class="active" href="/sign_in">登录</a>
        <b>·</b>
        <a id="js-sign-up-btn" class="" href="/sign_up">注册</a>
      </div>
    </h4>
    <div class="js-sign-in-container">
      <form id="new_session" action="/sessions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="VfRX30jt7DT4rpojuaIE3o4IJeG6zvMPIoNn4DYMiXI14ZnWorc5AheDY4q27zx5+L5j7FzusleLWLPIJDg+Rg==">

        <div class="input-prepend restyle js-normal">
          <b-img class="bac" src="../../static/img/zhanghao.png"/>
          <input placeholder="手机号或邮箱" type="text" name="session[email_or_mobile_number]" id="session_email_or_mobile_number">
        </div>

        <div class="input-prepend">
          <b-img class="bac" src="../../static/img/mima.png"/>
          <input placeholder="密码" type="password" name="session[password]" id="session_password">
        </div>
        <input value="false" type="hidden" name="session[oversea]" id="session_oversea">
        <div>
          <input name="captcha[validation][challenge]" autocomplete="off" type="hidden">
          <input name="captcha[validation][gt]" autocomplete="off" type="hidden">
          <input name="captcha[validation][validate]" autocomplete="off" type="hidden">
          <input name="captcha[validation][seccode]" autocomplete="off" type="hidden">
        </div>
        <div class="remember-btn">
          <input type="checkbox" value="true" checked="checked" name="session[remember_me]" id="session_remember_me"><span>记住我</span>
        </div>
        <div class="forget-btn">
          <a class="" data-toggle="dropdown" href="">登录遇到问题?</a>
          <ul class="dropdown-menu">
            <li><a href="/users/password/mobile_reset">用手机号重置密码</a></li>
            <li><a href="/users/password/email_reset">用邮箱重置密码</a></li>
            <li><a target="_blank" href="/p/9058d0b8711d">无法用海外手机号登录</a></li>
            <li><a target="_blank" href="/p/498a9fa7da08">无法用 Google 帐号登录</a></li>
          </ul>
        </div>
        <button class="sign-in-button" id="sign-in-form-submit-btn" type="button">
          <span id="sign-in-loading"></span>
          登录
        </button>
      </form>
      <!-- 更多登录方式 -->
      <div class="more-sign">
        <h6>社交帐号登录</h6>
        <ul>
          <li id="weibo-link-wrap" class="">
            <a class="weibo" id="weibo-link">
              <b-img class="bac" src="../../static/img/weibo.png"/>
            </a>
          </li>
          <li><a id="weixin" class="weixin" target="_blank" href="/u"><b-img class="bac" src="../../static/img/weixin.png"/></a></li>
          <li><a id="qq" class="qq" target="_blank" href="/u"><b-img class="bac" src="../../static/img/qq.png"/></a></li>
          <!--<li class="js-more-method" id="more"><a href=""><b-img class="bac" src="../../static/img/Login-qita.png"/></a></li>-->
          <li class="js-hide-method hide"><a class="douban" target="_blank" href="/u"><b-img class="bac" src="../../static/img/douban.png"/></a></li>
        </ul>
        <div class="weibo-geetest-captcha"></div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
  .sign {
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
  }
  .logo {
    position: absolute;
    top: 56px;
    margin-left: 50px;
  }
  .main {
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
  }
  .active {
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
  }
  .remember-btn {
    float: left;
    margin: 15px 0;
  }
  .sign .forget-btn {
    float: right;
    position: relative;
    margin: 15px 0;
    font-size: 14px;
  }
  li {
    position: relative;
    display: inline-block;
    padding: 8px 0;
    margin-bottom: -1px;
  }
  ul {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 10px;
  }

  .sign-in-button {
    background: #3194d0;
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #42c02e;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
  }
  .restyle {
    margin-bottom: 0;
  }
  .input-prepend {
    position: relative;
    width: 100%;
  }

</style>
