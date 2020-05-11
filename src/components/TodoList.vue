<template>
  <div class="container">
    <div class="row">
      <div class="col-12 py-5">
        <h1>{{ listName }}</h1>
      </div>
    </div>
    <div class="row mb-3">
      <create-todo @on-new-todo="addTodo($event)" />
    </div>
    <div class="row">
      <div class="col-12 col-sm-10 col-lg-6">
        <ul class="list-group">
          <todo
            v-for="(todo, index) in this.$store.state.todoList"
            :key="index"
            :description="todo.description"
            :completed="false"
            :check="false"
            @on-toggle="toggleTodo(todo)"
            @on-delete="deleteTodo(todo)"
            @on-edit="editTodo(todo, $event)"
            @move-list="moveToDone(todo)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
import CreateTodo from "./CreateTodo.vue";

export default {
  props: {
    listName: String
  },
  methods: {
    addTodo(newTodo) {
      this.$store.state.todoList.push({
        description: newTodo,
        completed: false
      });
      this.saveToStorage(newTodo);
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
    deleteTodo(deletedTodo) {
      this.$store.state.todoList = this.$store.state.todoList.filter(
        todo => todo !== deletedTodo
      );
    },
    editTodo(todo, newTodoDescription) {
      todo.description = newTodoDescription;
      console.log("hey");
      this.saveToStorage(todo.description);
    },
    moveToDone(todo) {
      this.deleteTodo(todo);
      this.$store.state.doneList.push(todo);
    },
    saveToStorage(todo) {
      let existing = localStorage.getItem("ToDOs");
      existing = existing ? existing.split(",") : [];
      if (existing[existing.length - 1] != todo) existing.push(todo);
      localStorage.setItem("ToDOs", existing.toString());
    }
  },
  components: { Todo, CreateTodo }
};
</script>

<style scoped lang="scss"></style>
