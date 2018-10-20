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
      <b-col cols="4" v-for="topic in topicList" :key="topic.id">
        <b-card>
          <div class="collection-wrap avater-weizhi">
            <router-link :to="'/c/'+topic.id">
              <img :src="topic.topicUrl" class="avatar-collection">
              <h4 class="name">{{topic.topicName}}</h4>
            </router-link>
            <span class="collection-description">{{topic.summary}}</span>
            <p>
              <b-button variant="success">关注</b-button>
            </p>
            <p>
              <span>{{topic.articleCount}}篇文章</span>
              <span>{{topic.fans}}个关注</span>
            </p>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: "Collerctions"
    ,
    data(){
      return{
        id: this.$route.params.id,
        topicList:[
          {
            "id":1,
            "topicName":"读书",
            "topicUrl":"//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "summary":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
            "articleCount":45135,
            "fans":160
          },
          {
            "id":2,
            "topicName":"读书",
            "topicUrl":"//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "summary":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
            "articleCount":45135,
            "fans":160
          }
          ,
          {
            "id":3,
            "topicName":"读书",
            "topicUrl":"//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "summary":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
            "articleCount":45135,
            "fans":160
          }
          ,
          {
            "id":4,
            "topicName":"读书",
            "topicUrl":"//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "summary":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
            "articleCount":45135,
            "fans":160
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
  .bb {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    width: 100%;
    opacity: 0;
    border-bottom: 2px solid #646464;
    -webkit-transform: translate(-50%) scaleX(0);
    transform: translate(-50%) scaleX(0);
    transition: .2s ease-in-out;
  }
</style>
