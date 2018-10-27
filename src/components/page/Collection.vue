
      <!--<b-col>-->
        <!--<p class="gonggao">专题公告</p>-->
        <!--<div class="description js-description expanded"><p></p><p>-->
          <!--投稿须知:-->
          <!--<br>    读书专题仅收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章。-->
          <!--<br>    文中不得出现非简书的链接;包括但不限于公众号、二维码、头条号、微博、一点资源等带有广告性质的信息; 配图不能带有水印。-->
          <!--<br>      文章收录字数1000字起( 大神请忽略此限制)，请不要直接摘抄原文的话就来投稿。请注意排版美观、请不要密集投稿。-->
          <!--<br>投稿请查看投稿须知：<a href="https://www.jianshu.com" class="blue-link">https://www.jianshu.com</a>-->
          <!--<br>进群请添加主编微信:  记得备注I简书昵称+读书]。</p>-->

          <!--<p>欢迎关注公众号茶点故事（Jianshu_teahouse）每周一篇编委精心推荐精彩书评。-->
            <!--<br>  </p><p></p><a class="open" data-action="toggle-description" href="javascript:void(null);">-->
            <!--收起描述 <i class="iconfont ic-hide"></i></a></div>-->


         <!--<div class="description js-description expanded">-->
          <!--<b-btn v-b-toggle.collapse1 variant="primary">打开描述</b-btn>-->
          <!--<b-collapse id="collapse1" class="mt-2">-->
            <!--<b-card>-->
              <!--<p class="card-text">Collapse contents Here</p>-->
              <!--<b-btn v-b-toggle.collapse1_inner size="sm">Toggle Inner Collapse</b-btn>-->
              <!--<b-collapse id=collapse1_inner class="mt-2">-->
                <!--<b-card>Hello!</b-card>-->
              <!--</b-collapse>-->
            <!--</b-card>-->
          <!--</b-collapse>-->
        <!--</div>-->
        <!--<div role="tablist">-->
          <!--<b-card no-body class="mb-1">-->
            <!--<b-card-header header-tag="header" class="p-1" role="tab">-->
              <!--<b-btn block href="#" v-b-toggle.accordion1 variant="info">Accordion 1</b-btn>-->
            <!--</b-card-header>-->
            <!--<b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">-->
              <!--<b-card-body>-->
                <!--<p class="card-text">-->
                  <!--I start opened because <code>visible</code> is <code>true</code>-->
                <!--</p>-->
                <!--<p class="card-text">-->
                  <!--{{ text }}-->
                <!--</p>-->
              <!--</b-card-body>-->
            <!--</b-collapse>-->
          <!--</b-card>-->
          <!--<b-card no-body class="mb-1">-->
            <!--<b-card-header header-tag="header" class="p-1" role="tab">-->
              <!--<b-btn block href="#" v-b-toggle.accordion2 variant="info">Accordion 2</b-btn>-->
            <!--</b-card-header>-->
            <!--<b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">-->
              <!--<b-card-body>-->
                <!--<p class="card-text">-->
                  <!--{{ text }}-->
                <!--</p>-->
              <!--</b-card-body>-->
            <!--</b-collapse>-->
          <!--</b-card>-->
          <!--<b-card no-body class="mb-1">-->
            <!--<b-card-header header-tag="header" class="p-1" role="tab">-->
              <!--<b-btn block href="#" v-b-toggle.accordion3 variant="info">Accordion 3</b-btn>-->
            <!--</b-card-header>-->
            <!--<b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">-->
              <!--<b-card-body>-->
                <!--<p class="card-text">-->
                  <!--{{ text }}-->
                <!--</p>-->
              <!--</b-card-body>-->
            <!--</b-collapse>-->
          <!--</b-card>-->
        <!--</div>-->


<template>
  <div>
    <b-row class="box">
      <b-col cols="8">
        <b-media vertical-align="center" class="article-box">
          <img :src="collectionDetail.collection.collectionUrl" class="article-thumbnail"/>
          <div class="colleciton-info">
            <h6 class="mt-0 mb-1 title">{{collectionDetail.collection.collectionName}}</h6>
            <p class="abstract">
              <span>收藏了{{collectionDetail.collection.articleCount}}篇文章,{{collectionDetail.collection.fansCount}}关注</span>
            </p>
          </div>
          <div class="button-box">
            <b-button variant="outline-success" class="my-btn">投稿</b-button>
            <b-button variant="success" class="my-btn">
              <font-awesome-icon icon="plus" style="color: #FFFFFF;font-size:10pt"/>
              关注
            </b-button>

          </div>
        </b-media>
        <div class="container recommend">
          <ul class="trigger-menu" data-pjax-container="#list-container">
            <li class="active">
              <a class="bac" data-order-by="recommend" href="/collections">
                <!--<i class="iconfont ic-recommend"></i>-->
                <b-img class="bac" src="../../static/img/pinglun-new.png"/>最新评论</a>
            </li>
            <li class="active"><a class="bac" data-order-by="city" href="/collections">
              <b-img class="bac" src="../../static/img/shoulu.png"/> 最新收录</a></li>
            <li class="active"><a class="bac" data-order-by="schoolyard" href="/collections">
              <b-img class="bac" src="../../static/img/hot.png"/> 热门</a></li></ul>
        </div>
        <v-article></v-article>
      </b-col>
      <b-col>
        <div class="right-box">
          <p>专题公告</p>
          <p>投稿须知</p>
          <p>{{collectionDetail.collection.notice}}</p>
        </div>
        <div class="right-box">
          <p>分享到</p>
        </div>
        <div class="right-box">
          <p class="gonggao">管理员</p>
          <ul>
            <li>
              <a href="/u" target="_blank" class="avatar">
                <b-img rounded="circle" width="48" height="48"src="//upload.jianshu.io/users/upload_avatars/619393/d97746b1-7f88-4307-ae12-ddedb17019fe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/></a>
              <a href="/u" target="_blank" class="name">夜未央</a>
              <span class="tag">创建者</span>
            </li>
          </ul>
          <p class="gonggao">关注的人({{collectionDetail.fansList.length}})</p>
          <ul class="list collection-follower">
            <li v-for="fans in collectionDetail.fansList" :key="fans.userId">
              <router-link :to="'/u/'+fans.userId">
                <img :src="fans.avatar" class="fans-avatar"/>
              </router-link>
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>
  </div>

</template>

<script>
  import vArticle from '../common/Articles';

  export default {
    components: {
      vArticle
    },
    data() {
      return {
        id: this.$route.params.id,
        collectionDetail: {
          "collection": {},
          "articleList": [],
          "fansList": []
        }
      }
    },
    activated() {
      this.id = this.$route.params.id;
      console.log(this.id);
      if (this.id == 1) {
        this.collectionDetail.collection = {
          "collectionId": 1,
          "collectionName": "读书",
          "collectionUrl": "https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
          "notice": "读书专题仅收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章。 \n" +
          "文中不得出现非简书的链接;包括但不限于公众号、二维码、头条号、微博、一点资源等带有广告性质的信息; 配图不能带有水印。 \n" +
          "文章收录字数1000字起( 大神请忽略此限制)，请不要直接摘抄原文的话就来投稿。请注意排版美观、请不要密集投稿。 \n" +
          "投稿请查看投稿须知：https://www.jianshu.com/p/2a4cc9232f37 \n" +
          "进群请添加主编微信: MYH561...",
          "articleCount": 49535,
          "fansCount": 1601,
          "articleList": [
            {
              "articleId": 1,
              "title": "测试文章",
              "summary": "测试文章测试文章测试文章测试文章测试文章...",
              "thumbnail": "1.png",
              "authorId": 2,
              "nickname": "作者",
              "comments": 1234,
              "likes": 12
            }
          ]
        };
        this.collectionDetail.fansList = [
          {
            "userId": 1,
            "nickname": "王诗翔",
            "avatar": "https://upload.jianshu.io/users/upload_avatars/3884693/b425c707-d998-46a6-98b1-9b1e241513c3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
          },
          {
            "userId": 2,
            "nickname": "乔汉童",
            "avatar": "https://upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
          },
          {
            "userId": 3,
            "nickname": "胡七筒",
            "avatar": "https://upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
          },
          {
            "userId": 4,
            "nickname": "冰千里",
            "avatar": "https://upload.jianshu.io/users/upload_avatars/8972166/bd7164e9-2272-4ecf-91d0-f4903a150d4f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
          },
          {
            "userId": 5,
            "nickname": "简书版权",
            "avatar": "https://upload.jianshu.io/users/upload_avatars/1835526/9bc600ce-7672-42b8-b03b-1a779593dd45.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
          }
        ];

      } else {
        this.collection = {};
      }
    }
  }
</script>

<style scoped>
  .box {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .abstract {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 20px;
    color: #999;
  }

  .right-box {
    font-size: 12px;
    color: #333;
    line-height: 20px;
    border-bottom: 0.3px solid #EEE;
    padding-top: 10px;
  }

  .list {
    margin-bottom: 20px;
    padding-bottom: 10px;
    list-style: none;
    border-bottom: 1px solid #f0f0f0;
    clear: both;
  }

  .list li {
    display: inline;
    margin-left: -5px;
  }

  .fans-avatar {
    width: 32px;
    height: 32px;
    border-radius: 32px;
    cursor: pointer;
  }

  .colleciton-info {
    float: right;
    margin-right: 380px;
  }

  .button-box {
    clear: both;
    float: right;
    margin-top: -50px;
  }

  .my-btn {
    width: 100px;
    height: 35px;
    border-radius: 20px;
    text-align: center;
    vertical-align: center;
    font-size: 13px;
  }



  .trigger-menu {
    margin: 30px 0 0;
    text-align: left;
  }
  .bac{
    padding: 13px 20px;
    color: #969696;

    line-height: 25px;
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
  }
  .active {
    border-bottom: 2px solid white;
  }
  .active:hover{
    border-bottom: 2px solid #646464;
  }
  a:hover {
    color: #646464;
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
  .title{
    color: black;
    font-weight: bold;
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
  }
  .gonggao{
    float: left;
    margin-bottom: 10px;
    font-size: 14px;
    color: #969696;
  }
  .avatar {
    float: left;
    margin-right: 10px;
  }
  .tag {
    padding: 1px 3px;
    margin-left: 2px;
    border-radius: 3px;
    font-size: 12px;
    color: #969696;
    border: 1px solid #969696;
  }
  .name {
    position: relative;
    max-width: 236px;
    vertical-align: middle;
    top: 1px;
    font-size: 14px;
    color: #333;
  }
</style>
