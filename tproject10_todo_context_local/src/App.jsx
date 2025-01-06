import { useState } from 'react'
import './App.css'
import { ToDoProvider } from './contexts'

function App() {
  const [todos, setTodos] = useState([])
  
  //add functionality 

  //Func adding 
  const addTodo = (todo) => {
    //add todo into array todos by using setTodo
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  //Func updating, we will add our current todo-msg in existing todo with id id
  //here in ma
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  //Func deleting todo
  //we will make new array such that every object which doesnt have given id is added back
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  } 

  const toggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) =>
      prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)) 
  }



  return (
    
    <ToDoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </ToDoProvider>
    
  )
}

export default App
