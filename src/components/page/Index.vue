<template xmlns:src="http://www.w3.org/1999/xhtml">
  <b-row>
    <b-col cols="8">
      <v-carousel></v-carousel>
      <!--<div class="recommend-collection">-->
        <!--&lt;!&ndash;<div class="btn-group" role="group" aria-label="...">&ndash;&gt;-->
        <!--<button type="button" class="btn btn-default" >Left</button>-->
        <!--</div>-->
      <!--</div>-->
      <div style="font-size: 10px" class="recommend-collection">
        <a class="collection bac" target="_blank" href="/1">
          <img width="35" height="35" src="//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
          <div class="name">自然科普</div>
        </a>
        <a class="collection bac" target="_blank" href="/2">
          <img width="35" height="35" src="//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
        <div class="name">摄影</div>
        </a>

        <a class="collection bac" target="_blank" href="/3">
        <img width="35" height="35" src="//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
        <div class="name">故事</div>
        </a>

        <a class="collection bac" target="_blank" href="/4">
        <img width="35" height="35" src="//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
        <div class="name">读书</div>
        </a>

        <a class="collection bac" target="_blank" href="/5">
        <img width="35" height="35" src="//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
        <div class="name">@IT·互联网</div>
        </a>

        <a class="collection bac" target="_blank" href="/6">
        <img width="35" height="35" src="//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
        <div class="name">简书电影</div>
        </a>

        <a class="collection bac" target="_blank" href="/7" >
        <img width="35" height="35" src="//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
        <!--<div class="name">旅行·在路上</div>-->
          <div class="name">旅行·在路上</div>
        </a>

        <a class="more-hot-collection bac" target="_blank" href="/collections">
          更多热门专题 <b-img class = ""src="../../static/img/left.png"/>
        </a>
      </div>
      <v-article></v-article>
    </b-col>
    <b-col>
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
  import vArticle from '../common/Article';
  import vRight from '../common/Right';
  import 'bootstrap/dist/css/bootstrap.css'
  import 'jquery/dist/jquery.min'
  import 'bootstrap/dist/js/bootstrap.min'

  export default {
    name: "Index",
    components: {
      vCarousel,
      vArticle,
      vRight
    }
  }
</script>

<style scoped>
  .bac{
    /*width: 263px;*/
    /*height: 50px;*/
    background:#000;
    text-align: left;
    background-color: white;
    border: none;
    color: black;
  }
  .bac:hover{
    background: #f0f0f0;
  }
  .collection {
    display: inline-block;
    margin: 0 18px 18px 0;
    min-height: 32px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
  }
  .recommend-collection {
    margin-bottom: 20px;
  }
  .name {
    display: inline-block;
    padding: 0 11px 0 6px;
    font-size: 14px;
  }
  .more-hot-collection {
    display: inline-block;
    margin-top: 7px;
    font-size: 14px;
    color: #787878;
  }
</style>
