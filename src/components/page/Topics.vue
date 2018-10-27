<template>
  <div class="recommend-collection">
    <a class="collection bac" v-for="collection in hotCollections" :key="collection.collectionId">
      <router-link :to="'/c/'+collection.collectionId">
        <img :src="collection.collectionUrl" class="small-img">
        <div class="name more">{{collection.collectionName}}</div>
      </router-link>
    </a>
    <router-link to="/collections">
      <span class="more">更多热门专题></span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "HotCollections",
    data() {
      return {
        hotCollections: [
          {
            "collectionId": 1,
            "collectionName": "读书",
            "collectionUrl": "https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
          },
          {
            "collectionId": 2,
            "collectionName": "@IT互联网",
            "collectionUrl": "https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
          },
          {
            "collectionId": 3,
            "collectionName": "旅行在路上",
            "collectionUrl": "https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
          },
          {
            "collectionId": 4,
            "collectionName": "手绘",
            "collectionUrl": "https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
          },
          {
            "collectionId": 5,
            "collectionName": "简书电影",
            "collectionUrl": "https://upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
          },
          {
            "collectionId": 6,
            "collectionName": "自然科普",
            "collectionUrl": "https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
          },
          {
            "collectionId": 7,
            "collectionName": "故事",
            "collectionUrl": "https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
          },
          {
            "collectionId": 8,
            "collectionName": "美食",
            "collectionUrl": "https://upload.jianshu.io/collections/images/30/IMG_2226.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
          },
          {
            "collectionId": 9,
            "collectionName": "程序员",
            "collectionUrl": "https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .recommend-collection {
    margin-top: 15px;
    font-size: 10px
  }
  .collection {
    display: inline-block;
    margin: 0 18px 18px 0;
    min-height: 10px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
  }
  .small-img {
    width: 30px;
    height: 30px;
  }

  .more {
    display: inline-block;
    margin-top: 7px;
    font-size: 14px;
    color: #787878;
  }

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

</style>
