<template>
  <div>
    <h4>专题{{id}}详情</h4>
    <b-row>
      <b-col cols="8">
        <b-media vertical-align="center" class="article-box">
          <img :src="topic.topicUrl" class="article-thumbnail"/>
          <h6 class="mt-0 mb-1 title">{{topic.topicName}}</h6>
          <p class="abstract">
            <span>收藏了{{topic.articleCount}}篇文章,{{topic.fans}}关注</span>
          </p>
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

        <div>
          <b-card title=""
                  img-alt="Img"
                  img-top>
            <div class="clearfix">
              <b-row>
                <b-col cols="8">
                  <a class="title" target="_blank" href="/h">海底捞董事长：我做了那么多亲情化举动，却“败给”一个吧台小姑娘</a>
                  <p class="card-text article">
                    01 刚当程序员时，我是属于那种勤勤恳恳类型的员工，工作态度用认真来形容不为过，
                    每天我几乎是团队里最早到公司，又最晚下班的一个。而组员张工一般情...
                  </p>
                  <div class="meta">
                    <a class="card-text" target="_blank" >暮时说势</a>
                    <a target="_blank">
                      <i class="card-text">
                        <b-img clss="img"
                               style="opacity:0.5;
                         filter:alpha(opacity=50);"
                               src="../../static/img/remake.png"/>
                        6</i>
                    </a> <span style="padding-left: 8px"><i class="card-text">
              <b-img class="img" src="../../static/img/like.png"/>9</i> </span>
                  </div>
                  <!--<div slot="footer">-->
                  <!--<small class="text-muted">Last updated 3 mins ago</small>-->
                  <!--</div>-->
                </b-col>
                <b-col cols="4">
                  <b-img style = "width: 160px; height: 120px;" right src="//upload-images.jianshu.io/upload_images/5049362-40b1a106860650f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="right image" />
                </b-col>
              </b-row>
            </div>
          </b-card>
          <b-card title=""
                  img-alt="Img"
                  img-top>
            <div class="clearfix">
              <b-row>
                <b-col cols="8">
                  <a class="title" target="_blank" href="/h">海底捞董事长：我做了那么多亲情化举动，却“败给”一个吧台小姑娘</a>
                  <p class="card-text article">
                    01 刚当程序员时，我是属于那种勤勤恳恳类型的员工，工作态度用认真来形容不为过，
                    每天我几乎是团队里最早到公司，又最晚下班的一个。而组员张工一般情...
                  </p>
                  <div class="meta">
                    <a class="card-text" target="_blank" style="color: gray ;font-size: 16px">暮时说势</a>
                    <a target="_blank">
                      <i class="card-text">
                        <b-img clss="img"
                               style="opacity:0.5;
                         filter:alpha(opacity=50);"
                               src="../../static/img/remake.png"/>
                        6</i>
                    </a> <span style="padding-left: 8px"><i class="card-text">
              <b-img class="img" src="../../static/img/like.png"/>9</i> </span>
                  </div>
                  <!--<div slot="footer">-->
                  <!--<small class="text-muted">Last updated 3 mins ago</small>-->
                  <!--</div>-->
                </b-col>
                <b-col cols="4">
                  <b-img style = "width: 160px; height: 120px;" right src="//upload-images.jianshu.io/upload_images/5049362-40b1a106860650f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="right image" />
                </b-col>
              </b-row>
            </div>
          </b-card>
          <b-card title=""
                  img-alt="Img"
                  img-top>
            <div class="clearfix">
              <b-row>
                <b-col cols="8">
                  <a class="title" target="_blank" href="/h">海底捞董事长：我做了那么多亲情化举动，却“败给”一个吧台小姑娘</a>
                  <p class="card-text article">
                    01 刚当程序员时，我是属于那种勤勤恳恳类型的员工，工作态度用认真来形容不为过，
                    每天我几乎是团队里最早到公司，又最晚下班的一个。而组员张工一般情...
                  </p>
                  <div class="meta">
                    <a class="card-text" target="_blank" style="color: gray ;font-size: 16px">暮时说势</a>
                    <a target="_blank">
                      <i class="card-text">
                        <b-img clss="img"
                               style="opacity:0.5;
                         filter:alpha(opacity=50);"
                               src="../../static/img/remake.png"/>
                        6</i>
                    </a> <span style="padding-left: 8px"><i class="card-text">
              <b-img class="img" src="../../static/img/like.png"/>9</i> </span>
                  </div>
                  <!--<div slot="footer">-->
                  <!--<small class="text-muted">Last updated 3 mins ago</small>-->
                  <!--</div>-->
                </b-col>
                <b-col cols="4">
                  <b-img style = "width: 160px; height: 120px;" right src="//upload-images.jianshu.io/upload_images/5049362-40b1a106860650f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="right image" />
                </b-col>
              </b-row>
            </div>
          </b-card>
          <b-card title=""
                  img-alt="Img"
                  img-top>
            <div class="clearfix">
              <b-row>
                <b-col cols="8">
                  <a class="title" target="_blank" href="/h">海底捞董事长：我做了那么多亲情化举动，却“败给”一个吧台小姑娘</a>
                  <p class="card-text article">
                    01 刚当程序员时，我是属于那种勤勤恳恳类型的员工，工作态度用认真来形容不为过，
                    每天我几乎是团队里最早到公司，又最晚下班的一个。而组员张工一般情...
                  </p>
                  <div class="meta">
                    <a class="card-text" target="_blank" style="color: gray ;font-size: 16px">暮时说势</a>
                    <a target="_blank">
                      <i class="card-text">
                        <b-img clss="img"
                               style="opacity:0.5;
                         filter:alpha(opacity=50);"
                               src="../../static/img/remake.png"/>
                        6</i>
                    </a> <span style="padding-left: 8px"><i class="card-text">
              <b-img class="img" src="../../static/img/like.png"/>9</i> </span>
                  </div>
                  <!--<div slot="footer">-->
                  <!--<small class="text-muted">Last updated 3 mins ago</small>-->
                  <!--</div>-->
                </b-col>
                <b-col cols="4">
                  <b-img style = "width: 160px; height: 120px;" right src="//upload-images.jianshu.io/upload_images/5049362-40b1a106860650f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="right image" />
                </b-col>
              </b-row>
            </div>
          </b-card>
          <b-card title=""
                  img-alt="Img"
                  img-top>
            <div class="clearfix">
              <b-row>
                <b-col cols="8">
                  <a class="title" target="_blank" href="/h">海底捞董事长：我做了那么多亲情化举动，却“败给”一个吧台小姑娘</a>
                  <p class="card-text article">
                    01 刚当程序员时，我是属于那种勤勤恳恳类型的员工，工作态度用认真来形容不为过，
                    每天我几乎是团队里最早到公司，又最晚下班的一个。而组员张工一般情...
                  </p>
                  <div class="meta">
                    <a class="card-text" target="_blank" style="color: gray ;font-size: 16px">暮时说势</a>
                    <a target="_blank">
                      <i class="card-text">
                        <b-img clss="img"
                               style="opacity:0.5;
                         filter:alpha(opacity=50);"
                               src="../../static/img/remake.png"/>
                        6</i>
                    </a> <span style="padding-left: 8px"><i class="card-text">
              <b-img class="img" src="../../static/img/like.png"/>9</i> </span>
                  </div>
                  <!--<div slot="footer">-->
                  <!--<small class="text-muted">Last updated 3 mins ago</small>-->
                  <!--</div>-->
                </b-col>
                <b-col cols="4">
                  <b-img style = "width: 160px; height: 120px;" right src="//upload-images.jianshu.io/upload_images/5049362-40b1a106860650f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="right image" />
                </b-col>
              </b-row>
            </div>
          </b-card>
          <b-card title=""
                  img-alt="Img"
                  img-top>
            <div class="clearfix">
              <b-row>
                <b-col cols="8">
                  <a class="title" target="_blank" href="/h">海底捞董事长：我做了那么多亲情化举动，却“败给”一个吧台小姑娘</a>
                  <p class="card-text article">
                    01 刚当程序员时，我是属于那种勤勤恳恳类型的员工，工作态度用认真来形容不为过，
                    每天我几乎是团队里最早到公司，又最晚下班的一个。而组员张工一般情...
                  </p>
                  <div class="meta">
                    <a class="card-text" target="_blank" style="color: gray ;font-size: 16px">暮时说势</a>
                    <a target="_blank">
                      <i class="card-text">
                        <b-img clss="img"
                               style="opacity:0.5;
                         filter:alpha(opacity=50);"
                               src="../../static/img/remake.png"/>
                        6</i>
                    </a> <span style="padding-left: 8px"><i class="card-text">
              <b-img class="img" src="../../static/img/like.png"/>9</i> </span>
                  </div>
                  <!--<div slot="footer">-->
                  <!--<small class="text-muted">Last updated 3 mins ago</small>-->
                  <!--</div>-->
                </b-col>
                <b-col cols="4">
                  <b-img style = "width: 160px; height: 120px;" right src="//upload-images.jianshu.io/upload_images/5049362-40b1a106860650f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="right image" />
                </b-col>
              </b-row>
            </div>
          </b-card>
          <b-card title=""
                  img-alt="Img"
                  img-top>
            <div class="clearfix">
              <b-row>
                <b-col cols="8">
                  <a class="title" target="_blank" href="/h">海底捞董事长：我做了那么多亲情化举动，却“败给”一个吧台小姑娘</a>
                  <p class="card-text article">
                    01 刚当程序员时，我是属于那种勤勤恳恳类型的员工，工作态度用认真来形容不为过，
                    每天我几乎是团队里最早到公司，又最晚下班的一个。而组员张工一般情...
                  </p>
                  <div class="meta">
                    <a class="card-text" target="_blank" style="color: gray ;font-size: 16px">暮时说势</a>
                    <a target="_blank">
                      <i class="card-text">
                        <b-img clss="img"
                               style="opacity:0.5;
                         filter:alpha(opacity=50);"
                               src="../../static/img/remake.png"/>
                        6</i>
                    </a> <span style="padding-left: 8px"><i class="card-text">
              <b-img class="img" src="../../static/img/like.png"/>9</i> </span>
                  </div>
                  <!--<div slot="footer">-->
                  <!--<small class="text-muted">Last updated 3 mins ago</small>-->
                  <!--</div>-->
                </b-col>
                <b-col cols="4">
                  <b-img style = "width: 160px; height: 120px;" right src="//upload-images.jianshu.io/upload_images/5049362-40b1a106860650f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="right image" />
                </b-col>
              </b-row>
            </div>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <p class="gonggao">专题公告</p>
        <div class="description js-description expanded"><p></p><p>
          投稿须知:
          <br>    读书专题仅收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章。
          <br>    文中不得出现非简书的链接;包括但不限于公众号、二维码、头条号、微博、一点资源等带有广告性质的信息; 配图不能带有水印。
          <br>      文章收录字数1000字起( 大神请忽略此限制)，请不要直接摘抄原文的话就来投稿。请注意排版美观、请不要密集投稿。
          <br>投稿请查看投稿须知：<a href="https://www.jianshu.com" class="blue-link">https://www.jianshu.com</a>
          <br>进群请添加主编微信:  记得备注I简书昵称+读书]。</p>

          <p>欢迎关注公众号茶点故事（Jianshu_teahouse）每周一篇编委精心推荐精彩书评。
            <br>  </p><p></p><a class="open" data-action="toggle-description" href="javascript:void(null);">
            收起描述 <i class="iconfont ic-hide"></i></a></div>

        <p class="gonggao">管理员</p>
        <ul>
          <li>
            <a href="/u" target="_blank" class="avatar">
              <b-img rounded="circle" width="48" height="48"src="//upload.jianshu.io/users/upload_avatars/619393/d97746b1-7f88-4307-ae12-ddedb17019fe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/></a>
            <a href="/u" target="_blank" class="name">夜未央</a>
            <span class="tag">创建者</span>
          </li>
        </ul>


        <p class="gonggao">关注的人</p>

        <ul class="list collection-follower">
          <li>
            <a href="/u" target="_blank" class="avatar">
              <b-img rounded="circle" width="32" height="32" src="//upload.jianshu.io/users/upload_avatars/14510700/f094a438-b104-4249-b95b-08d9e14be2f2?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="8d6148d5b3d3 · 几秒前 关注"/>
            </a>
          </li>
          <li>
            <a href="/u" target="_blank" class="avatar">
              <b-img rounded="circle" width="32" height="32" src="//upload.jianshu.io/users/upload_avatars/14510700/f094a438-b104-4249-b95b-08d9e14be2f2?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="8d6148d5b3d3 · 几秒前 关注"/>
            </a>
          </li>
          <li>
            <a href="/u" target="_blank" class="avatar">
              <b-img rounded="circle" width="32" height="32" src="//upload.jianshu.io/users/upload_avatars/14510700/f094a438-b104-4249-b95b-08d9e14be2f2?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="8d6148d5b3d3 · 几秒前 关注"/>
            </a>
          </li>
          <li>
            <a href="/u" target="_blank" class="avatar">
              <b-img rounded="circle" width="32" height="32" src="//upload.jianshu.io/users/upload_avatars/14510700/f094a438-b104-4249-b95b-08d9e14be2f2?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="8d6148d5b3d3 · 几秒前 关注"/>
            </a>
          </li>
          <li>
            <a href="/u" target="_blank" class="avatar">
              <b-img rounded="circle" width="32" height="32" src="//upload.jianshu.io/users/upload_avatars/14510700/f094a438-b104-4249-b95b-08d9e14be2f2?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="8d6148d5b3d3 · 几秒前 关注"/>
            </a>
          </li>
          <li>
            <a href="/u" target="_blank" class="avatar">
              <b-img rounded="circle" width="32" height="32" src="//upload.jianshu.io/users/upload_avatars/14510700/f094a438-b104-4249-b95b-08d9e14be2f2?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="8d6148d5b3d3 · 几秒前 关注"/>
            </a>
          </li>
          <li>
            <a href="/u" target="_blank" class="avatar">
              <b-img rounded="circle" width="32" height="32" src="//upload.jianshu.io/users/upload_avatars/14510700/f094a438-b104-4249-b95b-08d9e14be2f2?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="8d6148d5b3d3 · 几秒前 关注"/>
            </a>
          </li>
          <li>
            <a href="/u" target="_blank" class="avatar">
              <b-img rounded="circle" width="32" height="32" src="//upload.jianshu.io/users/upload_avatars/14510700/f094a438-b104-4249-b95b-08d9e14be2f2?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="8d6148d5b3d3 · 几秒前 关注"/>
            </a>
          </li>
          <a class="function-btn"><b-img rounded="circle" width="32" height="32" src="../../static/img/qita.png" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="8d6148d5b3d3 · 几秒前 关注"/>
          </a>
        </ul>
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

      </b-col>
    </b-row>

    <i class="fa fa-address-book" aria-hidden="true"></i>
    <i class="fa fa-address-book-o" aria-hidden="true"></i>

    <p><i class="icon-camera-retro icon-large"></i> icon-camera-retro</p>



  </div>

</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        topic: {},
        articleList: [],
        fansList:[],
        text:
        `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `
      }
    },
    activated() {
      this.id = this.$route.params.id;
      console.log(this.id);
      if (this.id == 1) {
        var t = {
          "id": 1,
          "topicName": "读书",
          "topicUrl": "https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
          "summary": "读书读书读书读书读书读书读书读书",
          "articleCount": 49535,
          "fans": 1601,
          "description":"fdfdf",
          "creator":"简书",
          "articleList":[
            {
              "id":1,
              "title":"测试文章",
              "summary":"测试文章测试文章测试文章测试文章测试文章...",
              "thumbnail":"1.png",
              "authorId":2,
              "nickname":"作者",
              "comments":1234,
              "likes":12
            }
          ],
          "fansList":[
            {
              "authorId":3,
              "avatar":"11.png"
            }
          ]
        };
        this.topic = t;
      } else {
        this.topic = {};
      }
    },
    computed: function () {
      return this.topic;
    }
  }
</script>

<style scoped>
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
  }.article{
     margin: 0 0 8px;
     font-size: 13px;
     line-height: 24px;
     color: #999;
   }
  .gonggao{
    float: left;
    margin-bottom: 10px;
    font-size: 14px;
    color: #969696;
  }
.description {
    position: relative;
    margin-bottom: 20px;
    padding: 0 0 16px;
    text-align: left;
    font-size: 14px;
    border-bottom: 1px solid #f0f0f0;
    clear: both;
    word-break: break-word!important;
    word-break: break-all;
  }
  .open {
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
  .function-btn {
    position: absolute;
    margin-left: 3px;
    width: 32px;
    height: 32px;
    border: 3px solid #fff;
    border-radius: 50%;
    background-color: #f0f0f0;
    color: #999;
    text-align: center;
    line-height: 2;
  }
</style>
