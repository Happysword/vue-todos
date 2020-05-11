import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import TodoList from "../components/TodoList.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter();
const store = new Vuex.Store({
  state: {
    todoList: [],
    doneList: []
  }
});

const wrapper = shallowMount(TodoList, {
  localVue,
  router,
  store
});
describe("TodoList Component test suite", () => {
  it("checks the add todo function", () => {
    expect(wrapper.vm.$store.state.todoList.length).toBe(0);
    wrapper.vm.addTodo("Test");
    expect(wrapper.vm.$store.state.todoList.length).toBe(1);
  });

  it("checks the toggle todo function", () => {
    expect(wrapper.vm.$store.state.todoList[0].completed).toBe(false);
    wrapper.vm.toggleTodo(wrapper.vm.$store.state.todoList[0]);
    expect(wrapper.vm.$store.state.todoList[0].completed).toBe(true);
  });

  it("checks the delete todo function", () => {
    expect(wrapper.vm.$store.state.todoList.length).toBe(1);
    wrapper.vm.deleteTodo(wrapper.vm.$store.state.todoList[0]);
    expect(wrapper.vm.$store.state.todoList.length).toBe(0);
  });

  it("checks the edit todo function", () => {
    wrapper.vm.addTodo("Test");
    expect(wrapper.vm.$store.state.todoList.length).toBe(1);
    expect(wrapper.vm.$store.state.todoList[0].description).toBe("Test");
    wrapper.vm.editTodo(wrapper.vm.$store.state.todoList[0], "Changed");
    expect(wrapper.vm.$store.state.todoList[0].description).toBe("Changed");
  });

  it("checks the move to Done function", () => {
    expect(wrapper.vm.$store.state.doneList.length).toBe(0);
    wrapper.vm.moveToDone(wrapper.vm.$store.state.todoList[0]);
    expect(wrapper.vm.$store.state.doneList.length).toBe(1);
  });
});
