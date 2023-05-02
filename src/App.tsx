import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './Todo';
import { v4 as uuid } from 'uuid';
import TodoList from './components/TodoList';


const App : React.FC = () => {

  const [todo,setTodo] = useState<string>('')
  const [todos,setTodos] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:uuid(),todo,isCompleted:false}])
      setTodo('')
    }
  }

  return (
    <div className='App'>
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App;
