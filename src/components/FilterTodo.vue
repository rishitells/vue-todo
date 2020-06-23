<template>
  <section class="filter">
    <span @click="$emit('set-filter', FILTER_TYPES.all)">All</span>
    <span @click="$emit('set-filter', FILTER_TYPES.pending)">Pending</span>
    <span @click="$emit('set-filter', FILTER_TYPES.completed)">Completed</span>
  </section>
</template>

<script>
export default {
  name: "FilterTodo",
  props: {
    setFilter: Function
  },
  data: function() {
    return {
      FILTER_TYPES: { all: "all", pending: "pending", completed: "completed" }
    };
  }
};
</script>

<style>
span {
  color: coral;
  margin-left: 8px;
  font-size: 12px;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>
