<template>
  <div class="main-top">
    <a class="avatar" href="/u/65401f4c09c8">
      <img src="//upload.jianshu.io/users/upload_avatars/13891058/6ef650bb-abb8-482e-951c-afe078bfddf7.png?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240" alt="240">
    </a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        user: {},
        articleList: [],
        fansList:[],
      }
    },
    activated() {
      this.id = this.$route.params.id;
      console.log(this.id);
      if (this.id == 1) {
        var t = {
          "id":1,
          "UserName":"遛遛心情的溜妈",
          "UserUrl":"//upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
          "summary":"溜爸，简书签约作者，舞枪弄棒、舞文弄墨的计算机工程师，梦想老婆孩子热炕头上写故事。",
          "attention ": 880,//关注
          "articleCount":197,//文章数
          "fans":28734,//粉丝
          "words":494781,//字数
          "get-likes":2015,//收获喜欢
          "new-article1":"［奇幻］唐朝那些猫事儿（91）",//最新文章
          "new-article2":"［奇幻］唐朝那些猫事儿（90）",
          "new-article3":"［奇幻］唐朝那些猫事儿（89）",
          "description":"fdfdf",
          "creator":"简书",
          "articleList":[
            {
              "id":1,
              "title":"测试文章",
              "summary":"测试文章测试文章测试文章测试文章测试文章...",
              "thumbnail":"qq.png",
              "authorId":2,
              "nickname":"作者",
              "comments":1234,
              "likes":12
            }
          ],
          "fansList":[
            {
              "authorId":3,
              "avatar":"qq.png"
            }
          ]
        };
        this.user = t;
      } else {
        this.user = {};
      }
    },
    computed: function () {
      return this.user;
    }
  }
</script>

<style scoped>

</style>
