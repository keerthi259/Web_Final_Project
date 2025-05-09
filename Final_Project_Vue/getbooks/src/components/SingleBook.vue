<template>
  <div :class="book.published ? 'green' : 'red'">
    <h2> {{ book.title }} </h2>
    <h3> {{ book.year }} </h3>
    <h3> {{ book.published }} </h3>
  </div>
</template>

<script>
export default {
  name: 'SingleBook',
  props: {
    book: Array
  }
}
</script>

<style scoped>
.green {
  background-color: #e0f7e9;
  border-left: 5px solid #4caf50;
}

.red {
  background-color: #fdecea;
  border-left: 5px solid #e53935;
}

div {
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  text-align: left;
}

h2 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 5px;
}

h3 {
  font-size: 1rem;
  color: #555;
  margin-bottom: 3px;
}
</style>
