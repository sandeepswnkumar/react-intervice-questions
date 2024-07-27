import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos : []
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add_todo: (state, action) => {
            action.payload.isCompleted = false
            state.todos.push(action.payload)
        },
        remove_todo: (state, action) => {
            state.todos = state.todos.filter(value => value.id !== action.payload)
        },
        completed_todo: (state, action) => {
            state.todos = state.todos.map((todo)=>{
                if(todo.id == action.payload){
                    return {...todo, isCompleted:true}
                }
                return todo;
            })
        },
    },
})

export const {add_todo, remove_todo, completed_todo} = todoSlice.actions;

export default todoSlice.reducer;