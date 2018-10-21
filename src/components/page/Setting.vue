<template>
  <b-container class="bv-example-row">
    <br>
    <b-row>
      <b-col cols="4">
        <b-list-group>
          <b-list-group-item >
            <router-link to="/basic">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/basic.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">基础设置</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/profile">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/profile.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">个人资料</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/weibo-auth">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/weibo-auth.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">微博认证</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/blacklist">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/blacklist.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">黑名单</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/rewarding-setting">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/reward-setting.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">赞赏设置</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/account-setting">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/account-setting.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">账号管理</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col cols="8">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    export default {
        name: "Setting"
    }
</script>

<style scoped>

</style>
