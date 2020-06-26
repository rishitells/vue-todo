import {get} from "../../api/requests";

const state = {
    todos: []
}

const getters = {
    todos: (state) => state.todos
}

const mutations = {
    setTodos: (state, todos) => {
        state.todos = todos;
    }
}

const actions = {
    async fetchTodos({commit}) {
        const response = await get("https://jsonplaceholder.typicode.com/todos?_limit=8");
        commit('setTodos', response);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}