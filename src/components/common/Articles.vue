<template>
  <b-card>
    <div class="main">
        <div class="row out-set" v-for="article in articles" :key="article.id" >
          <b-row>
            <b-col cols="6">
              <router-link :to="'/u/'+article.articleId">
                <p class="title">{{article.title}}</p>
              </router-link>
              <p class="introduction">{{article.summary}}</p>
              <div class="line">
                <p class="amount-text">{{article.author}}</p>
                <img src="//p88kzenjw.bkt.clouddn.com/message.png" class="icon2">
                <p class="amount-text">{{article.likes}}</p>
                <img src="//p88kzenjw.bkt.clouddn.com/like.png" class="icon3">
                <p class="amount-text">{{article.watches}}</p>
                <!--<p class="amount-text time-location">{{article.writeTime}}</p>-->
              </div>
            </b-col>
            <b-col cols="4">
              <img :src="article.articleImg" class="picture">
            </b-col>
          </b-row>
        </div>
      </div>
  </b-card>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'jquery/dist/jquery.min'
  import 'bootstrap/dist/js/bootstrap.min'

  export default {
    name : "Articles",
    data(){
      return {
        articles : []
      }
    },
    mounted(){
      this.$http
        .get("http://localhost:8080/article/all")
        .then((res) => {
          this.articles = res.data.data;
        })
    }
  }
  // export default {
  //   name: "Article",
  //   data() {
  //     return {
  //       slide: 0,
  //       sliding: null,
  //       articleList: [
  //         {
  //           "id": 1,
  //           "title": "时间的灰烬‖第二章 一息尚存 ",
  //           "introduction": "从公交车上下来，再过一个宽阔的路口，即到羊角镇小学的门边。一扇锈迹斑斑的铁门里面有一幢三层白色瓷砖的小楼，阳台则是天蓝色瓷砖，前面一片青灰水...",
  //           "url": "https://upload-images.jianshu.io/upload_images/2558050-ef8d9f002052927f.jpg",
  //           "icon1":"http://p88kzenjw.bkt.clouddn.com/eye1.png",
  //           "amount1":78,
  //           "icon2":"http://p88kzenjw.bkt.clouddn.com/message.png",
  //           "amount2":13,
  //           "icon3":"http://p88kzenjw.bkt.clouddn.com/like.png",
  //           "amount3":56,
  //           "time":"前天 00:24"
  //         },
  //         {
  //           "id": 2,
  //           "title": "时间的灰烬‖第一章 无眠 4",
  //           "introduction": "从公交车上下来，再过一个宽阔的路口，即到羊角镇小学的门边。一扇锈迹斑斑的铁门里面有一幢三层白色瓷砖的小楼，阳台则是天蓝色瓷砖，前面一片青灰水...",
  //           "url": "https://upload-images.jianshu.io/upload_images/2558050-743ed993b590351c.jpg",
  //           "icon1":"http://p88kzenjw.bkt.clouddn.com/eye1.png",
  //           "amount1":78,
  //           "icon2":"http://p88kzenjw.bkt.clouddn.com/message.png",
  //           "amount2":13,
  //           "icon3":"http://p88kzenjw.bkt.clouddn.com/like.png",
  //           "amount3":56,
  //           "time":"10.07 23:41"
  //         },
  //         {
  //           "id": 3,
  //           "title": "《江湖儿女》：所谓江湖，也只是个人选择",
  //           "introduction": "从公交车上下来，再过一个宽阔的路口，即到羊角镇小学的门边。一扇锈迹斑斑的铁门里面有一幢三层白色瓷砖的小楼，阳台则是天蓝色瓷砖，前面一片青灰水...",
  //           "url": "https://upload-images.jianshu.io/upload_images/2558050-db4e6411857b830e.jpg",
  //           "icon1":"http://p88kzenjw.bkt.clouddn.com/eye1.png",
  //           "amount1":78,
  //           "icon2":"http://p88kzenjw.bkt.clouddn.com/message.png",
  //           "amount2":13,
  //           "icon3":"http://p88kzenjw.bkt.clouddn.com/like.png",
  //           "amount3":56,
  //           "time":"前天 00:24"
  //         },
  //         {
  //           "id": 4,
  //           "title": "小说‖猫，女孩与孔明灯",
  //           "introduction": " 猫是一只流浪在学校草坪上的猫，它每天无所事事地游荡在那一片绿意葱葱的草地上，累了就找个舒适地方躺下睡觉，饿了就去食堂里蹭一些残羹冷炙，晴天...",
  //           "url": "https://upload-images.jianshu.io/upload_images/2558050-db76ad4af2de7691.jpg",
  //           "icon1":"http://p88kzenjw.bkt.clouddn.com/eye1.png",
  //           "amount1":100,
  //           "icon2":"http://p88kzenjw.bkt.clouddn.com/message.png",
  //           "amount2":5,
  //           "icon3":"http://p88kzenjw.bkt.clouddn.com/like.png",
  //           "amount3":0,
  //           "time":"06.06 00:47"
  //         },
  //
  //
  //       ]
  //     }
  //   }
  // }
</script>

<style scoped>
  .main{
    margin-top: 2%;
    margin-right: -60%;
  }
  .title{
    font-size: 18px;
    font-weight: bold;
    color: #333;
    padding-top: 6%;
  }
  .picture{
    width:128px;
    height: 100px;
  }
  .introduction{
    color: grey;
    font-size: 12px;
    color: gray;
    letter-spacing: 1px;
  }

  .icon1{
    width: 15px;
    height: 14px;
  }
  .icon2{
    width: 15px;
    height: 14px;
    margin-left: 5%;
  }
  .icon3{
    width: 16px;
    height: 15px;
    margin-left: 4%;
  }
  .amount-text{
    font-size: 12px;
    color: gray;
    margin-left: 1%;
    margin-top: -1px;
  }

  .line{
    display: flex;
  }
  .out-set{
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 1%

  }
  .two{
    margin-top:5%;
  }

</style>
