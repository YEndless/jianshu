<template>
  <div class="row">
    <div class="asize offset-2">
      <div class="">
        <div>
          <button class="bac">
             <a href="/notifications/#/comments">
              <b-img src="../../static/img/pinglun.png"/>
               <span>评论</span> <!---->
            </a>
          </button>
        </div>
        <div>
          <button class="bac">
            <a href="/notifications/#/comments" class="left">
              <b-img src="../../static/img/xinjian.png"/>
              <span>简信</span> <!---->
            </a>
          </button>
        </div>
        <div>
          <button class="bac">
            <a href="/notifications/#/comments">
              <b-img src="../../static/img/tougao.png"/>
              <span>投稿请求</span> <!---->
            </a>
          </button>
        </div>
        <div>
          <button class="bac">
            <a href="/notifications/#/comments">
              <b-img src="../../static/img/xihuan.png"/>
              <span>喜欢和赞</span> <!---->
            </a>
          </button>
        </div>
        <div>
          <button class="bac">
            <a href="/notifications/#/comments">
              <b-img src="../../static/img/guanzhu-red.png"/>
              <span>关注</span> <!---->
            </a>
          </button>
        </div>
        <div class="bac">
          <button class="bac">
            <a href="/notifications/#/comments">
              <b-img src="../../static/img/zanshang.png"/>
              <span>赞赏和付费 </span> <!---->
            </a>
          </button>
        </div>
        <div class="bac">
          <button class="bac">
            <a href="/notifications/#/comments">
              <b-img src="../../static/img/qita.png"/>
              <span>其他</span> <!---->
            </a>
          </button>
        </div>
      </div>
    </div>
    <div class="menu ">收到的评论</div>
    <p class="center">这里还木有内容哦~</p>
  </div>
</template>

      <script>
    export default {
      name: "Notifications"
    }
</script>

<style scoped>
  .row {
    padding: 30px 0;
  }
  .set{
    margin-left: 33.33333%;
  }
  /*.bac{*/
    /*text-align: left;*/
    /*background-color: white;*/
    /*width: 263px;*/
    /*height: 50px;*/
    /*border: none;*/
     /*}*/

  .bac{
    width: 263px;
    height: 50px;
    background:#000;
    text-align: left;
    background-color: white;
    border: none;
  }
  .bac:hover{
    background: #f0f0f0;
  }
  .menu {
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 700;
  }
  .center{
    text-align: center;        /*文字水平居中对齐*/
    line-height: 200px;        /*设置文字行距等于div的高度*/
  }
</style>
