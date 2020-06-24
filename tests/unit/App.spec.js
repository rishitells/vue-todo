import Vue from "vue";
import { mount } from "@vue/test-utils";
import chai, { expect } from "chai";
// import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);

import App from "../../src/App.vue";

describe("<App />", () => {
  let component;
  beforeEach(() => {
    component = mount(App);
  });

  it("should add a todo item when user types into input and clicks on add button", async () => {
    component.find('input').setValue('Item 1');
    await Vue.nextTick();

    component.find("button").trigger("click");
    await Vue.nextTick();

    expect(component.findAll("li")).length(1);
    // expect(component.find('li').text()).equal('Item 1');
  });

  it("should delete a todo item when user clicks on delete button for a todo", async () => {
    component.find('input').setValue('Item 1');
    await Vue.nextTick();

    component.find("button").trigger("click");
    await Vue.nextTick();

    expect(component.findAll("li")).length(1);

    component.find("[data-testid='delete-todo']").trigger("click");
    await Vue.nextTick();

    expect(component.findAll("li")).length(0);
  });

  it("should toggle todo completion when it is clicked upon", async () => {
    component.find('input').setValue('Item 1');
    await Vue.nextTick();

    component.find("button").trigger("click");
    await Vue.nextTick();

    component.find("li").trigger('click');
    await Vue.nextTick();

    expect(component.find("li").classes()).contains('completed');

    component.find("li").trigger('click');
    await Vue.nextTick();

    expect(component.find("li").classes()).not.contains('completed');
  });
});
