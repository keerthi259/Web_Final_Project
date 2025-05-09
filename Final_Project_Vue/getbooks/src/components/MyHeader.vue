<template>
  <div>
    <h2> {{ bookName }}</h2>
    <h3> {{ authorName }}</h3>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  props: {
    bookName: String,
    authorName: String
  }
}
</script>

<style scoped>
div {
  text-align: center;
  padding: 20px 0;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
}

h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 5px;
}

h3 {
  font-size: 1.2rem;
  color: #666;
}
</style>