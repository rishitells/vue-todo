import Vue from 'vue'
import { shallowMount } from "@vue/test-utils";
import chai, { expect } from "chai";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import List from "../../src/components/List";

describe("<List />", () => {
  const deleteTodoSpy = sinon.spy();
  const wrapper = shallowMount(List, {
    propsData: {
      todos: [{
        id: 1, text: 'Item 1', completed: false
      }],
      deleteTodo: deleteTodoSpy,
      toggleTodoCompletion: () => {},
      visibilityFilter: 'all'
    }
  });

  it("should render the correct markup", async () => {
    wrapper.find('button').trigger('click');

    await Vue.nextTick();

    expect(wrapper.props().deleteTodo).calledWith(1);
  });
});