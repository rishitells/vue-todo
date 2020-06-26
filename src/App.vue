<template>
  <div id="app">
    <Title msg="Todo App" />
    <Input v-model="inputValue" v-bind:add-todo="addTodo" />
    <!-- does same thing as
    <Input
      v-bind:value="inputValue"
      v-on:input="inputValue = $event"
    />
    -->
    <FilterTodo v-on:set-filter="visibilityFilter = $event" />
    <p v-if="visibilityFilter !== 'all'">Showing {{visibilityFilter}} todos</p>
    <List
      v-bind:todos="todos"
      v-bind:delete-todo="deleteTodo"
      v-bind:toggle-todo-completion="toggleTodoCompletion"
      v-bind:visibility-filter="visibilityFilter"
    />
  </div>
</template>

<script>
import Title from "./components/Title.vue";
import Input from "./components/Input";
import List from "./components/List";
import FilterTodo from "./components/FilterTodo";
import {mapActions, mapGetters} from "vuex";


export default {
  name: "App",
  components: {
    FilterTodo,
    List,
    Title,
    Input
  },
  data: function() {
    return {
      inputValue: "",
      visibilityFilter: 'all'
    };
  },
  computed: {
    ...mapGetters(['todos'])
  },
  methods: {
    ...mapActions(['fetchTodos', 'addTodo', 'deleteTodo', 'toggleTodoCompletion']),

    // toggleTodoCompletion: function(id) {
    //   this.todos = this.todos.map(todo => {
    //     if (todo.id === id) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed
    //       };
    //     }
    //
    //     return todo;
    //   });
    // },
  },
  created() {
    this.fetchTodos();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
