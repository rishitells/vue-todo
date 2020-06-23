<template>
  <div class="list">
    <ul>
      <li
        v-for="todo in filteredTodos"
        v-bind:key="todo.id"
        @click="toggleTodoCompletion(todo.id)"
        v-bind:class="{ completed: todo.completed }"
      >
        {{ todo.text }} <button @click="deleteTodo(todo.id)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    todos: Array,
    deleteTodo: Function,
    toggleTodoCompletion: Function,
    visibilityFilter: String
  },
  computed: {
    filteredTodos: function() {
      if (this.visibilityFilter === "completed") {
        return this.todos.filter(todo => todo.completed);
      }

      if (this.visibilityFilter === "pending") {
        return this.todos.filter(todo => !todo.completed);
      }

      return this.todos;
    }
  }
};
</script>

<style scoped>
button {
  border: none;
  background: none;
  color: blue;
  text-decoration: underline;
}
.completed {
  text-decoration: line-through;
}
</style>
