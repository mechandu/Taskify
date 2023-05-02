import React,{useState,useRef,useEffect} from 'react'
import { Todo } from '../Todo';
import './styles.css'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'

interface Props {
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoItem: React.FC<Props> = ({todo,todos,setTodos}) => {

const [edit,setEdit] = useState<boolean>(false)
const [editInput,setEditInput] = useState<string>(todo.todo)
const inputRef = useRef<HTMLInputElement>(null)


const handleDone =(id:string) => {
    const tempTodos:Todo[] = todos.map(item => {
        if(item.id === id){
            return {...item,isCompleted:!todo.isCompleted}
        }
        return item
    })
    setTodos(tempTodos)
}

const handleDelete = (id:string) => {
    setTodos(todos.filter(item => item.id !== id))
}

const handleEdit = (e : React.FormEvent<HTMLFormElement>,id:string) => {
    e.preventDefault()
    setEdit(!edit)
    const temp = todos.map(item => {
        if(item.id === id){
            return {...item,todo:editInput};
        }
        else{
            return item;
        }
    })
    setTodos(temp)
}

const isCompleted:string = todo.isCompleted ? 'todoText strikeText' : 'todoText'

const Input =  <input ref = {inputRef} type ='text' value={editInput} onChange={(e) =>setEditInput(e.target.value)}/> 

useEffect(()=> {
    inputRef.current?.focus()

},[edit])
console.log(inputRef)

  return (

    <form onSubmit={(e)=>handleEdit(e,todo.id)} className='todoItemCard'>
        
        {edit ? Input :
        <span className={isCompleted}>{editInput}</span> }
            <span className="icon" onClick={()=>{
                if(!edit && !todo.isCompleted){
                    setEdit(!edit)
                }
            }}><AiFillEdit /></span>
            <span className="icon" onClick={()=>handleDelete(todo.id)}><AiFillDelete /></span>
            <span className="icon" onClick={() => handleDone(todo.id)}><MdDone /></span>
    </form>
  )

}

export default TodoItem