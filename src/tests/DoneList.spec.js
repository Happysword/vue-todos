import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import doneList from "../components/DoneList.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter();
const store = new Vuex.Store({
  state: {
    todoList: [],
    doneList: [{ description: "hello", completed: false }]
  }
});

const wrapper = shallowMount(doneList, {
  localVue,
  router,
  store
});

describe("DoneList Component test suite", () => {
  it("checks the delete todo function", () => {
    expect(wrapper.vm.$store.state.doneList.length).toBe(1);
    wrapper.vm.deleteTodo(wrapper.vm.$store.state.doneList[0]);
    expect(wrapper.vm.$store.state.doneList.length).toBe(0);
  });

  it("checks the move to List function", () => {
    expect(wrapper.vm.$store.state.todoList.length).toBe(0);
    wrapper.vm.moveToList(wrapper.vm.$store.state.doneList[0]);
    expect(wrapper.vm.$store.state.todoList.length).toBe(1);
  });
});
