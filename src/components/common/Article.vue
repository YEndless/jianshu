<template>
  <div>
    <div class="article-content" v-for="(article,index) in articles" :key="article.id">
      <router-link :to="'/u/'+article.id">
        <b-row>
          <b-col cols="9">
            <div class="title">
              <span>{{article.title}}</span>
            </div>
            <div class="abstract">
              <span>{{article.synopsis}}</span>
            </div>
            <div class="abstract">
              <span>6546546&nbsp;&nbsp;</span>
              <span><a class="iconfont">&#xe684;</a>&nbsp;{{article.comments}}&nbsp;&nbsp;</span>
              <span><a class="iconfont">&#xe630;</a>&nbsp;{{article.loves}}</span>
            </div>
          </b-col>
          <b-col cols="3">
            <b-img
              rounded
              :src="article.cover"
              fluid
              right
              width="125"
              height="100"/>
          </b-col>
        </b-row>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Articles",
    data() {
      return {
        articles: []
      }
    },
    mounted() {
      this.$http
        .get("http://localhost:8080/article/all")
        .then((res) => {
          this.articles = res.data.data;
        })
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  .article-content {
    margin-top: 10px;
    padding: 35px 0 30px 0;
    border-top: solid 1px rgb(240, 240, 240);
  }

  .title > span {
    color: rgb(51, 51, 51);
    font-size: 18px;
    font-weight: 700;
  }

  .abstract > span {
    color: rgb(153, 153, 153);
    font-size: 13px;
  }
</style>
