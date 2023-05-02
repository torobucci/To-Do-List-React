import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
};
const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addToDo: (state, title) => {
            const newItem = {
                id: Math.floor(Math.random() * 1000),
                title: title.payload,
                completed: false,
            }
            const newState = [...state.todos, newItem]
            return { ...state, todos: newState }
        },
        deleteToDo: (state, todoId) => {
            const newState = [
                ...state.todos.filter(todo => {
                    return todo.id !== todoId.payload
                })
            ]
            return { ...state, todos: newState }
        },
        editToDo: (state, action) => {
            const newState = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, title: action.payload.title };
                }
                return todo;
            });
            return { ...state, todos: newState };
        },
        updateCompletion: (state, action) => {
            const newState = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            })
            return { ...state, todos: newState };
        }
    },
});
const { addToDo, deleteToDo, editToDo, updateCompletion } = todosSlice.actions;
export { addToDo, deleteToDo, editToDo, updateCompletion };
export default todosSlice.reducer;
