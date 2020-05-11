<template>
  <div class="container">
    <div class="row">
      <div class="col-12 py-5">
        <h1>Done</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-10 col-lg-6">
        <ul class="list-group">
          <todo
            v-for="(todo, index) in this.$store.state.doneList"
            :key="index"
            :description="todo.description"
            :completed="true"
            :check="true"
            @move-list="moveToList(todo)"
          />
        </ul>
      </div>
    </div></div
></template>

<script>
import Todo from "./Todo.vue";

export default {
  components: { Todo },
  methods: {
    moveToList(newtodo) {
      this.$store.state.doneList = this.$store.state.doneList.filter(
        todo => todo !== newtodo
      );
      this.$store.state.todoList.push(newtodo);
    }
  }
};
</script>

<style></style>
