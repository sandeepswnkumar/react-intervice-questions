import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import { useDispatch, useSelector } from 'react-redux'
import { add_todo } from './assets/Store/TodoReducer'

function App() {
  const [text, setText] = useState('')
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch();


  const handleAddTodo = () =>{
    if(!text) return false;
    dispatch(add_todo({id:Date.now(),text}))
    setText('')
  }

  return (
    <>
      <div className='container mx-auto w-full flex justify-center items-center flex-col'>
        <div className='mt-10 w-2/6 flex justify-center'>
          <input type="text" className='border p-3 w-4/6' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter Todo' />
          <button className='border mx-2 p-3 w-2/6' onClick={handleAddTodo}>Add Todo</button>
        </div>
        <div className='mt-3 w-2/6 p-2 flex justify-center flex-col'>
        {
          todos.length > 0 ?
          todos.map(todo => <Todo key={todo.id} id={todo.id} text={todo.text} completed={todo.isCompleted} />)
          : <p>Record Not Found</p>
        }
        </div>
      </div>
    </>
  )
}

export default App
