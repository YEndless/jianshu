<template>
    <div class="recommend-collection">
      <a class="collection" v-for="topic in topicList" :key="topic.id">
        <router-link :to="'/c'+topic.id">
          <img :src="topic.topicURL" class="small-img">
          <div class="name more">{{topic.topicName}}</div>
        </router-link>
      </a>
      <router-link to="/collerctionss">
        <span>more</span>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "Topics"
    }
</script>

<style scoped>

</style>
