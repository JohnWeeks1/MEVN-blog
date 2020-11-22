<template>
  <div class="home">
    <h1>Hello</h1>
    <p>{{ posts }}</p>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      posts: null,
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      try {
        this.posts = await axios.get('http://localhost:4001/api/posts');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
