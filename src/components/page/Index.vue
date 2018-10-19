<template xmlns:src="http://www.w3.org/1999/xhtml">
  <b-row>
    <b-col cols="8">
      <v-carousel></v-carousel>
      <!--<div class="recommend-collection">-->
        <!--&lt;!&ndash;<div class="btn-group" role="group" aria-label="...">&ndash;&gt;-->
        <!--<button type="button" class="btn btn-default" >Left</button>-->
        <!--</div>-->
      <!--</div>-->
      <v-topics></v-topics>
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
  import vTopics from '../page/Topics';
  import 'bootstrap/dist/css/bootstrap.css'
  import 'jquery/dist/jquery.min'
  import 'bootstrap/dist/js/bootstrap.min'

  export default {
    name: "Index",
    components: {
      vCarousel,
      vArticle,
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
</style>
