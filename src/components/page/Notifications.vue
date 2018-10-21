<template>
  <!--<div class="row">-->
    <!--<div class="asize offset-2">-->
      <!--<div class="">-->
        <!--<div>-->
          <!--<button class="bac">-->
             <!--<a href="/notifications/#/comments">-->
              <!--<b-img src="../../static/img/comment.png"/>-->
               <!--<span>评论</span> &lt;!&ndash;&ndash;&gt;-->
            <!--</a>-->
          <!--</button>-->
        <!--</div>-->
        <!--<div>-->
          <!--<button class="bac">-->
            <!--<a href="/notifications/#/comments" class="left">-->
              <!--<b-img src="../../static/img/xinjian.png"/>-->
              <!--<span>简信</span> &lt;!&ndash;&ndash;&gt;-->
            <!--</a>-->
          <!--</button>-->
        <!--</div>-->
        <!--<div>-->
          <!--<button class="bac">-->
            <!--<a href="/notifications/#/comments">-->
              <!--<b-img src="../../static/img/tougao.png"/>-->
              <!--<span>投稿请求</span> &lt;!&ndash;&ndash;&gt;-->
            <!--</a>-->
          <!--</button>-->
        <!--</div>-->
        <!--<div>-->
          <!--<button class="bac">-->
            <!--<a href="/notifications/#/comments">-->
              <!--<b-img src="../../static/img/xihuan.png"/>-->
              <!--<span>喜欢和赞</span> &lt;!&ndash;&ndash;&gt;-->
            <!--</a>-->
          <!--</button>-->
        <!--</div>-->
        <!--<div>-->
          <!--<button class="bac">-->
            <!--<a href="/notifications/#/comments">-->
              <!--<b-img src="../../static/img/guanzhu-red.png"/>-->
              <!--<span>关注</span> &lt;!&ndash;&ndash;&gt;-->
            <!--</a>-->
          <!--</button>-->
        <!--</div>-->
        <!--<div class="bac">-->
          <!--<button class="bac">-->
            <!--<a href="/notifications/#/comments">-->
              <!--<b-img src="../../static/img/zanshang.png"/>-->
              <!--<span>赞赏和付费 </span> &lt;!&ndash;&ndash;&gt;-->
            <!--</a>-->
          <!--</button>-->
        <!--</div>-->
        <!--<div class="bac">-->
          <!--<button class="bac">-->
            <!--<a href="/notifications/#/comments">-->
              <!--<b-img src="../../static/img/qita.png"/>-->
              <!--<span>其他</span> &lt;!&ndash;&ndash;&gt;-->
            <!--</a>-->
          <!--</button>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="menu ">收到的评论</div>-->
    <!--<p class="center">这里还木有内容哦~</p>-->
    <!--<font-awesome-icon icon="fa-mars-stroke " />-->
    <!--<font-awesome-icon icon="coffee" />-->
  <!--</div>-->
  <b-container class="bv-example-row">
    <br>
    <b-row>
      <b-col cols="4">
        <b-list-group>
          <b-list-group-item >
            <router-link to="/comment">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/comment.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">评论</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/letter">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/xinjian.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">简信</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/submission">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/tougao.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">投稿请求</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/likeAndPraise">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/xihuan.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">喜欢和赞</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/likeAndPraise">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/guanzhu-red.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">关注</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/likeAndPraise">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/zanshang.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">赞赏和付费</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/likeAndPraise">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/qita.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">其他</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col cols="8">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </b-col>
    </b-row>
  </b-container>
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
