import { mount, createLocalVue } from "@vue/test-utils";
import CreateTodo from "../components/CreateTodo.vue";

const localVue = createLocalVue();

const wrapper = mount(CreateTodo, {
  localVue
});

describe("Create Todo Component test suite", () => {
  it("checks prop data is correct", () => {
    expect(wrapper.vm.$data.newTodo).toMatch("");
    wrapper.find("#input").setValue("this changed");
    wrapper.find("#form").trigger("submit");
    expect(wrapper.emitted("on-new-todo")).toBeTruthy();
  });
});
