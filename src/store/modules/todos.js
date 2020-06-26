import {deleteReq, get, post, put} from "../../api/requests";

const state = {
    todos: []
}

const getters = {
    todos: (state) => state.todos,
    getTodoById: (state) => (id) => {
        return state.todos.find(todo => todo.id === id);
    }
}

const mutations = {
    setTodos: (state, todos) => {
        state.todos = todos;
    },

    addNewTodo: (state, todo) => {
        state.todos.unshift(todo);
    },

    updateTodo: (state, {id, updatedTodo}) => {
        state.todos = state.todos.map(todo => {
            if(todo.id === id) {
                return  {...updatedTodo}
            }
            return todo;
        });
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
    },

    async toggleTodoCompletion({commit, getters}, id) {
        const todo = getters.getTodoById(id);
        const updatedData = {
            ...todo,
            completed: !todo.completed
        }
        const response = await put(`https://jsonplaceholder.typicode.com/todos/${id}`, updatedData);
        commit('updateTodo', {id, updatedTodo: response});
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}