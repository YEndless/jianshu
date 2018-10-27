<template xmlns:src="http://www.w3.org/1999/xhtml">
  <b-row>
    <b-col cols="8">
      <v-carousel></v-carousel>
      <v-topics></v-topics>
      <v-articles></v-articles>
    </b-col>
    <b-col>
        <a target="_blank" href="/r1"><img class="xiao" src="//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png" alt="Banner s 3"></a>
        <a target="_blank" href="/r2"><img class="xiao" src="//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png" alt="Banner s 4"></a>
        <a target="_blank" href="/r3"><img class="xiao" src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" alt="Banner s 7"></a>
        <a target="_blank" href="/r4"><img class="xiao"src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt="Banner s 5"></a>
        <a target="_blank" href="/r5"><img class="xiao" src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" alt="Banner s 6"></a>
        <a id="index-aside-download-qrbox" class="col-xs-8 download" data-toggle="popover" data-placement="top" data-html="true" data-trigger="hover" data-content="<img src=&quot;//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png&quot; alt=&quot;Download index side qrcode&quot; />" href="/apps?utm_medium=desktop&amp;utm_source=index-aside-click" data-original-title="" title="">
          <img class="qrcode" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="Download index side qrcode">
          <div class="info">
            <div class="title">下载简书手机App<a href="#" class="btn btn-default"><b-img class = "img-small"src="../../static/img/left.png"/></a>
            </div>
            <div class="description">随时随地发现和创作内容</div>
          </div>
        </a>
      <v-right></v-right>
    </b-col>
  <b-col>
    <a href="#" class="btn btn-default" style="position:fixed;right:20px;bottom:20px"><b-img src="../../static/img/top.png"/></a>
    <!--<a class="btn btn-default" href="#" role="button" style="position:fixed;right:0;bottom:0">回到顶部</a>-->
    <!--<a href="/Login">1111111111111111111</a>-->
  </b-col>
  </b-row>
</template>

<script>
  import vCarousel from '../common/Carousel';
  import vArticles from '../common/Articles';
  import vRight from '../common/Right';
  import vTopics from '../page/Topics';
  import 'bootstrap/dist/css/bootstrap.css'
  import 'jquery/dist/jquery.min'
  import 'bootstrap/dist/js/bootstrap.min'

  export default {
    name: "Index",
    components: {
      vCarousel,
      vArticles,
      vRight,
      vTopics
    }
  }
</script>

<style scoped>
  /*.bac{*/
    /*!*width: 263px;*!*/
    /*!*height: 50px;*!*/
    /*background:#000;*/
    /*text-align: left;*/
    /*background-color: white;*/
    /*border: none;*/
    /*color: black;*/
  /*}*/
  /*.bac:hover{*/
    /*background: #f0f0f0;*/
  /*}*/
  /*.collection {*/
    /*display: inline-block;*/
    /*margin: 0 18px 18px 0;*/
    /*min-height: 32px;*/
    /*background-color: #f7f7f7;*/
    /*border: 1px solid #dcdcdc;*/
    /*border-radius: 4px;*/
    /*vertical-align: top;*/
    /*overflow: hidden;*/
  /*}*/
  /*.recommend-collection {*/
    /*margin-bottom: 20px;*/
  /*}*/
  /*.name {*/
    /*display: inline-block;*/
    /*padding: 0 11px 0 6px;*/
    /*font-size: 14px;*/
  /*}*/
  /*.more-hot-collection {*/
    /*display: inline-block;*/
    /*margin-top: 7px;*/
    /*font-size: 14px;*/
    /*color: #787878;*/
  /*}*/



  .xiao{
    width: 280px;
    height: 50px;
  }
  .download {
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
  }
  .info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
  }
  .qrcode {
    width: 60px;
    height: 60px;
    opacity: .85;
  }
  .title {
    font-size: 15px;
    color: #333;
  }
  .description {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }.img-small{
     width: 10px;
     height: 10px;
   }
  i {
    position: inherit;
    width: inherit;
    height: inherit;
    font-size: 13px;
  }

</style>
