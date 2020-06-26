import {deleteReq, get, post} from "../../api/requests";

const state = {
    todos: []
}

const getters = {
    todos: (state) => state.todos
}

const mutations = {
    setTodos: (state, todos) => {
        state.todos = todos;
    },

    addNewTodo: (state, todo) => {
        state.todos.unshift(todo);
    },

    removeTodo(state, id) {
        state.todos = state.todos.filter(todo => todo.id !== id);
    }
}

const actions = {
    async fetchTodos({commit}) {
        const response = await get("https://jsonplaceholder.typicode.com/todos?_limit=8");
        commit('setTodos', response);
    },

    async addTodo({commit}, title) {
        const data = {
            title, completed: false
        }
        const response = await post('https://jsonplaceholder.typicode.com/todos', data);
        commit('addNewTodo', response);
    },

    async deleteTodo({commit}, id) {
        await deleteReq(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}