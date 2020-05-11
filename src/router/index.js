import Vue from "vue";
import VueRouter from "vue-router";
import TodoList from "../components/TodoList.vue";
import DoneList from "../components/DoneList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "todo",
    component: TodoList,
    props: { listName: "My to-dos" }
  },
  {
    path: "/done",
    name: "done",
    component: DoneList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
