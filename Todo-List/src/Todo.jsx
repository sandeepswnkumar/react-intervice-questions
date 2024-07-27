import React from 'react'
import { remove_todo,completed_todo } from './assets/Store/TodoReducer'
import { useDispatch } from 'react-redux'

const Todo = ({ id, text, completed }) => {

    const dispatch = useDispatch();
    const handleDelete = (id) => {
        console.log(id)
        dispatch(remove_todo(id))
    }

    const handleCompleted = (id) => {
        // console.log(e,id)
        dispatch(completed_todo(id))
    }


    return (
        <div className='border w-full py-3 flex my-2'>
            <input type="radio" checked={completed} className='w-6 mx-3' onClick={() => handleCompleted(id)} />
            
            <p className='p-2 w-5/6'>{completed ? <del>{text}</del> : text}</p>
            
            <button className='border w-1/6 mx-2' onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}

export default Todo