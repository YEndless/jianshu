<template>
  <div>
    <div class="container recommend">
      <img class="recommend-banner" src="//cdn2.jianshu.io/assets/web/recommend-author-03cc8798d5cc3f986e49cbcb2eb63079.png" alt="Recommend collection">
      <a target="_blank" class="help" href="/?">
        <b-img src="../../static/img/wenhao.png"/>
        如何成为签约作者
      </a>
    </div>
    <b-row>
      <b-col cols="4" v-for="user in userList" :key="user.id">
        <b-card>
          <div class="collection-wrap avater-weizhi">
            <router-link :to="'/u/'+user.id">
              <b-img :src="user.UserUrl" class="avatar-collection" rounded="circle"/>
              <h4 class="name">{{user.userName}}</h4>
            </router-link>
            <span class="collection-description">{{user.summary}}</span>
            <p>
              <b-button variant="success">关注</b-button>
            </p>

            <div>
              <div class="meta">最近更新</div>
              <p>{{user["new-article1"]}}</p>
              <p>{{user["new-article2"]}}</p>
              <p>{{user["new-article3"]}}</p>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: "Users"
    ,
    data(){
      return{
        id: this.$route.params.id,
        userList:[
          {
            "id":1,
            "UserName":"遛遛心情的溜妈",
            "UserUrl":"//upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "summary":"溜爸，简书签约作者，舞枪弄棒、舞文弄墨的计算机工程师，梦想老婆孩子热炕头上写故事。",
            "attention ": 880,//关注
            "articleCount":197,//文章数
            "fans":28734,//粉丝
            "words":494781,//字数
            "get-likes":2015,//收获喜欢
            "new-article1":"［奇幻］唐朝那些猫事儿（91）",//最新文章
            "new-article2":"［奇幻］唐朝那些猫事儿（90）",
            "new-article3":"［奇幻］唐朝那些猫事儿（89）",
          },
          {
            "id":2,
            "UserName":"遛遛心情的溜妈",
            "UserUrl":"//upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "summary":"溜爸，简书签约作者，舞枪弄棒、舞文弄墨的计算机工程师，梦想老婆孩子热炕头上写故事。",
            "attention ": 880,//关注
            "articleCount":197,//文章数
            "fans":28734,//粉丝
            "words":494781,//字数
            "get-likes":2015,//收获喜欢
            "new-article1":"［奇幻］唐朝那些猫事儿（91）",//最新文章
            "new-article2":"［奇幻］唐朝那些猫事儿（90）",
            "new-article3":"［奇幻］唐朝那些猫事儿（89）",
          },
          {
            "id":3,
            "UserName":"遛遛心情的溜妈",
            "UserUrl":"//upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "summary":"溜爸，简书签约作者，舞枪弄棒、舞文弄墨的计算机工程师，梦想老婆孩子热炕头上写故事。",
            "attention ": 880,//关注
            "articleCount":197,//文章数
            "fans":28734,//粉丝
            "words":494781,//字数
            "get-likes":2015,//收获喜欢
            "new-article1":"［奇幻］唐朝那些猫事儿（91）",//最新文章
            "new-article2":"［奇幻］唐朝那些猫事儿（90）",
            "new-article3":"［奇幻］唐朝那些猫事儿（89）",
          },
          {
            "id":4,
            "UserName":"遛遛心情的溜妈",
            "UserUrl":"//upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "summary":"溜爸，简书签约作者，舞枪弄棒、舞文弄墨的计算机工程师，梦想老婆孩子热炕头上写故事。",
            "attention ": 880,//关注
            "articleCount":197,//文章数
            "fans":28734,//粉丝
            "words":494781,//字数
            "get-likes":2015,//收获喜欢
            "new-article1":"［奇幻］唐朝那些猫事儿（91）",//最新文章
            "new-article2":"［奇幻］唐朝那些猫事儿（90）",
            "new-article3":"［奇幻］唐朝那些猫事儿（89）",
          }

        ]
      }
    }
  }
</script>

<style scoped>
  .recommend {
    position: relative;
    padding: 30px 0 50px;
    text-align: center;
  }
  .recommend-banner {
    width: 100%;
    min-height: 100px;
    background-color: hsla(0,0%,71%,.2);
    border-radius: 6px;
  }
  .help{
    position:absolute;
    right:30px;
    top:68px;
    color:#fff
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
  .collection-wrap {
    height: 300px;
  }
  .avatar-collection {
    border-radius: 8px;
    width: 80px;
    height: 80px;
    margin: -40px 0 10px;
    display: inline-block;
    border: 1px solid #ddd;
    background-color: #fff;
  }
  .collection-description {
    min-height: 75px;
  }
  .name{
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: inherit;
    color: #333;
    /*text-align: center;*/
  }
  .avater-weizhi{
    text-align: center;
  }
  collection-description{
    min-height: 50px;
    font-size: 13px;
    line-height: 25px;
  }
  .meta {
    float: left;
    margin-top: -29px;
    padding-right: 10px;
    font-size: 12px;
    color: #969696;
    background-color: #f8f8f8;
  }
</style>
