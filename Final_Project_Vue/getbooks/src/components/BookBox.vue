<template>
  <div v-for="book of videos" :key="book.id">
    <SingleBook :book="book" />
  </div>
</template>

<script>
import SingleBook from './SingleBook.vue'

export default {
  name: 'BookBox',
  props: {
    videos: Array
  },
  components: {
    SingleBook
  },
}
</script>

<style scoped>
div {
  text-align: center;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 10px;
}
</style>