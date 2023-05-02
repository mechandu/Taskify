import React from 'react'
import { Todo } from '../Todo'
import TodoItem from './TodoItem';
interface Props{
    todos : Todo[];
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList :React.FC<Props>= ({todos,setTodos}) => {
  return (
    <div className='todos'>
        {todos.map(item => (
        <TodoItem todo ={item} todos = {todos} key = {item.id} setTodos={setTodos}/>
        ))}
    </div>
  )
}

export default TodoList