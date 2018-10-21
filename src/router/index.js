import Vue from 'vue'
import Router from 'vue-router'
import jquery from 'jquery'
// import bootstrap from 'bootstap'

Vue.use(Router)
// Vue.use(bootstrap)
Vue.config.productionTip = false

export default new Router({
  mode: "history",
  routes: [
    {
      //首页组件
      path: '/',
      redirect: '/index',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: {title: '首页'},
      children: [
        {
          path: '/index',
          component: resolve => require(['../components/page/Index.vue'], resolve),
          meta: {title: '首页'}
        },
        {
          //关注组件
          path: '/subscriptions',
          component: resolve => require(['../components/page/Subscriptions.vue'], resolve),
          meta: {title: '关注'}
        },
        {
          //消息组件
          path: '/notifications',
          component: resolve => require(['../components/page/Notifications.vue'], resolve),
          meta: {title: '消息'},
          children: [
            {
              path: '/comment',
              component: resolve => require(['../components/notifications/Comment.vue'],resolve),
              meta: {title:'个人用户评论'}
            },
            {
              path: '/letter',
              component: resolve => require(['../components/notifications/Letter.vue'],resolve),
              meta: {title:'简信'}
            },
            {
              path: '/likeAndPraise',
              component: resolve => require(['../components/notifications/LikeAndPraise.vue'],resolve),
              meta: {title:'喜欢和赞'}
            },
            {
              path: '/submission',
              component: resolve => require(['../components/notifications/Submission.vue'],resolve),
              meta: {title:'投稿请求'}
            },
          ]
        },
        {
          //所有用户组件
          path: '/users',
          component: resolve => require(['../components/page/Users.vue'], resolve),
          meta: {title: '所有用户'}
        },
        {
          //所有专题组件
          path: '/collections',
          component: resolve => require(['../components/page/Collections.vue'], resolve),
          meta: {title: '所有专题'}
        },
        {
          // 个人中心组件
          path: '/u',
          component: resolve => require(['../components/page/User.vue'], resolve),
          meta: {title: '个人中心'}
        },
        // {
        //   path:"/u/:id",
        //   component:resolve => require(['../components/page/User.vue'],resolve),
        //   meta:{title:'他人的个人中心'}
        // },
        {
          path:'/c/:id',
          component:resolve => require(['../components/page/Collection.vue'],resolve),
          meta:{title:'单个专题'}
        },
        {
          path:'/setting',
          component:resolve => require(['../components/page/Setting.vue'],resolve),
          meta:{title:'设置'},
          children:[
            {
              //设置下内容,基础设置
              path:'/basic',
              component:resolve => require(['../components/settings/Basic.vue'],resolve),
              meta:{title:'基础设置'}
            },
            {
              //个人资料
              path:'/profile',
              component:resolve => require(["../components/settings/Profile.vue"],resolve),
              meta:{title:'个人资料'}
            },
            {
              //个人资料
              path:'/weibo-auth',
              component:resolve => require(["../components/settings/WeiboAuth.vue"],resolve),
              meta:{title:'微博认证'}
            },
            {
              //个人资料
              path:'/blacklist',
              component:resolve => require(["../components/settings/blackList.vue"],resolve),
              meta:{title:'黑名单'}
            },
            {
              //个人资料
              path:'/rewarding-setting',
              component:resolve => require(["../components/settings/blackList.vue"],resolve),
              meta:{title:'赞赏设置'}
            },
            {
              //个人资料
              path:'/account-setting',
              component:resolve => require(["../components/settings/blackList.vue"],resolve),
              meta:{title:'账号管理'}
            }
          ]
        }
      ]
    },

    {
      // 写文章
      path: '/write',
      component: resolve => require(['../components/page/Write.vue'], resolve),
      meta: {title: '写文章'}
    },
    {
      // 登录
      path: '/sign-in',
      component: resolve => require(['../components/page/Login.vue'], resolve),
      meta: {title: '登录'},

    }
  ]
})
