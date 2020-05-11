import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Todo from "../components/Todo.vue";

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

const wrapper = mount(Todo, {
  localVue,
  router,
  store,
  propsData: {
    description: "String",
    completed: false,
    check: false
  }
});

describe("TodoList Component test suite", () => {
  wrapper.vm.$refs.newTodo = { focus: jest.fn };
  it("checks prop data is correct", () => {
    expect(wrapper.vm.description).toMatch("String");
    expect(wrapper.vm.completed).toBe(false);
    expect(wrapper.vm.check).toBe(false);
  });

  it("checks that events are emitted", () => {
    expect(wrapper.emitted("on-toggle")).toBeFalsy();
    wrapper.find("#toggle-btn").trigger("click");
    expect(wrapper.emitted("on-toggle")).toBeTruthy();

    expect(wrapper.emitted("on-delete")).toBeFalsy();
    wrapper.find("#delete-btn").trigger("click");
    expect(wrapper.emitted("on-delete")).toBeTruthy();

    expect(wrapper.emitted("move-list")).toBeFalsy();
    wrapper.find("#check-box").trigger("click");
    expect(wrapper.emitted("move-list")).toBeTruthy();

    expect(wrapper.emitted("on-edit")).toBeFalsy();
    wrapper.find("#edit-btn").trigger("click");
    wrapper.find("#edit-btn").trigger("click");
    expect(wrapper.emitted("on-edit")).toBeTruthy();
  });
});
