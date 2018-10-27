<template>
  <div>
    <div class="container padding-set" v-for="articleDetail in articleDetailList" :key="articleDetailList.id">
      <p class="top-title">他一年读700本书，每个月写60篇书评，怎么做到的？</p>
      <div class="author">
        <div class="row">
          <b-col cols="2">
             <!--<img src="http://localhost:8080/static/img/avatar12.jpeg" class="author-avatar">-->
            <img src="//upload.jianshu.io/users/upload_avatars/4893996/3d931822-23ee-48cd-bd7a-f9a27f60118b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" class="author-avatar">
          </b-col>
          <b-col cols="10">
            <div class="author-right-top">
              <p class="author-name">且听风吟</p>
              <img src="https://upload.jianshu.io/user_badge/92b54a8a-197a-4d9b-829c-c3bd2a170a2a" class="author-credit">
              <div class="button-set"><input type="button" class="login-btn btn btn-block" value="+关注"></div>
            </div>
            <div class="author-right-bottom">
              <p class="count">{{articleDetail.publishTime}}  &nbsp   &nbsp 字数 &nbsp{{articleDetail.wordNumber}}
                &nbsp 阅读 &nbsp{{articleDetail.readNumber}}
                &nbsp 评论 &nbsp{{articleDetail.commentNumber}}
                &nbsp 喜欢 &nbsp{{articleDetail.likeNumber}}
                &nbsp 赞赏 &nbsp{{articleDetail.appreciateNumber}}
              </p>
            </div>

          </b-col>
      </div>
    </div>

      <div class="text">
        <p>很多商界名人以读书多而著称，俞敏洪说自己3个月读了60多本书，做了几万字的笔记，在北大上学4年读了800本。亚洲首富孙正义生病3年期间读了3000本书。张瑞敏每周读2本。</p>
        <p>
          名人们直言不讳，说自己坚持读书，思维能力持续提升。读书耗费时间，他们每天处理繁杂事务，怎么还有时间读书呢？为什么我们却经常说自己没时间读书？你真的是“没时间”读书吗？
        </p>
        <p>{{articleDetail.articleText}}</p>
        <img :src="articleDetail.articleTextPicture" class="text-picture">
      </div>


      <div>
        <p class="support-text">小礼物走一走，来简书关注我</p>
        <div class="button-set"><input type="button" class="credit-btn btn btn-block" value="+关注"></div>
      </div>

  </div>
</div>

</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        articleDetailList:[
          {
            "id": 1,
            "articleTitle":"他一年读700本书，每个月写60篇书评，怎么做到的？",
            "authorAvatar":"http://localhost:8080/static/img/avatar12.jpeg",
            "authorName":"且听风吟",
            "publishTime":"2018.09.26 16:53",
            "wordNumber":2073,
            "readNumber":411,
            "commentNumber": 3,
            "likeNumber":2,
            "appreciateNumber":5,
            "articleText":"日本有个书评家叫印南敦史，父亲是编辑，但他小时候并不喜欢读书，读书也慢，一页要看5分钟。2012年，印南敦史应邀写书评，为了完成工作，他开始训练自己大量、快速阅读，一年读了700多本书，每个月写60多篇书评，他的书评很有特色，在媒体上发布后，很受欢迎。从一个名副其实的“慢读者”到“速读达人”，印南敦史都做了哪些事呢？他在《快速阅读术》一书中介绍了自己阅读商务类图书的读书方法。",
            "articleTextPicture":"https://upload-images.jianshu.io/upload_images/6617326-8a6809f5805816b5.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700/format/webp"
          }
          ]
      }
    }
  }
</script>

<style scoped>
  .top-title{
    font-size: 34px;
    font-weight: bold;
  }
  .padding-set{
    padding-left: 22%;
    padding-right: 22%;
    margin-top: 5%;
    /*background: gainsboro;*/
  }
  .author{
    margin-top: 5%;
  }
  .author-avatar{
    width: 48px;
    height: 48px;
    border-radius: 100%;
    margin-top: 6%;
  }
  .author-name{
    font-size: 17px;
  }
.author-credit{
  width: 20px;
  height: 20px;
}
.count{
  /*display: flex;*/
  font-size: 12px;
  color: grey;
}
  .author-right-top{
    display: flex;
  }
  .author-credit{
    margin-left: 3%;
    margin-top: 3px;
  }
  .login-btn{
      background-color: #42c02e;
      border-radius: 30px;
     font-size: 14px;
       /*padding: 8px 10px;*/
       color: #fff;
       height: 22px;
       width: 22px;
       vertical-align: middle;
       line-height: 9px;
     }
  .button-set{
    width: 64px;
    margin-left: 2%;
  }
  .button-set input value{
   margin-top: -3px;
  }
  .text{
    margin-top: 6%;
  }
  .text-picture{
    width: 98%;
    height: 400px;
  }
  .support-text{
    text-align: center;
    color: #969696;
    font-weight: bold;
    font-size: 22px;
    margin-top: 20px;
  }
</style>



<!--<template>-->
  <!--<div>-->
   <!--这是第{{id}}个文章-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--export default {-->
        <!--name: "ArticleDetail",-->
        <!--data() {-->
        <!--return {-->
          <!--id: this.$route.params.id,-->
        <!--}-->
      <!--}-->
    <!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
