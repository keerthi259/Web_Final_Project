<template>
  <MyHeader bookName="YouTube-" authorName="Trending Videos" />
  <BookBox :videos="videos" />
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import BookBox from './components/BookBox.vue';

export default {
  name: 'App',
  components: {
    MyHeader,
    BookBox
  },
  data() {
    return {
      videos: []
    }
  },
  methods: {
    async fetchvideos() {
      const res = await fetch("http://localhost:1040/videos");
      const data = await res.json();
      console.log(data);
      return data
    }
  },
  async created() {
    this.videos = await this.fetchvideos();
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color: #f9f9f9;
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 1000px;
  margin: 30px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

h1, h2, h3 {
  color: #2c3e50;
}

button {
  background-color: #1976d2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #1565c0;
}
</style>