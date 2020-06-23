<template>
  <section class="input">
    <input
      placeholder="Add todo..."
      type="text"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
    <button @click="addTodo(value)">ADD</button>
  </section>
</template>

<script>
export default {
  name: "Input",
  props: {
    value: String,
    addTodo: Function
  }
};
</script>

<style scoped>
  input,
  button {
    padding: 6px 4px;
  }
  button {
    margin-left: 4px;
  }
</style>
