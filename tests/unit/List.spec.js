import Vue from "vue";
import { shallowMount } from "@vue/test-utils";
import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);

import List from "../../src/components/List";

describe("<List />", () => {
  const props = {
    todos: [
      {
        id: 1,
        text: "Item 1",
        completed: false
      },
      {
        id: 2,
        text: "Item 2",
        completed: true
      },
      {
        id: 3,
        text: "Item 3",
        completed: false
      }
    ],
    deleteTodo: sinon.spy(),
    toggleTodoCompletion: sinon.spy(),
    visibilityFilter: "all"
  };

  const wrapper = shallowMount(List, {
    propsData: {
      ...props
    }
  });

  it("should render 3 list items", () => {
    expect(wrapper.findAll("li")).length(3);
  });

  it('should render 2 list items when visibility filter is "completed"', async () => {
    const wrapperWithCompletedTodos = shallowMount(List, {
      propsData: {
        ...props,
        visibilityFilter: "completed"
      }
    });

    expect(wrapperWithCompletedTodos.findAll("li")).length(1);
  });

  it("should call passed #toggleTodoCompletion prop when list item is clicked", async () => {
    wrapper.find("li").trigger("click");

    await Vue.nextTick();

    expect(wrapper.props().toggleTodoCompletion).calledWith(1);
  });

  it("should call passed #deleteTodo prop when delete button is clicked", async () => {
    wrapper.find("button").trigger("click");

    await Vue.nextTick();

    expect(wrapper.props().deleteTodo).calledWith(1);
  });
});
