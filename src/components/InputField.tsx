import { useRef } from 'react';
import '../components/styles.css'

interface Props {
todo:string;
setTodo:React.Dispatch<React.SetStateAction<string>>;
handleAdd : (e:React.FormEvent<EventTarget>)=> void
}

const InputField = ({todo,setTodo,handleAdd} : Props) => {

const inputRef  = useRef<HTMLInputElement>(null)
  return <form className='input' onSubmit={(e) => {
    handleAdd(e)
    inputRef.current?.blur()
  }}> 
    <input ref = {inputRef} type="text"  className = 'inputBox' onChange = {(e) => setTodo(e.target.value)} value={todo} placeholder='Enter a task' />
    <button type='submit' className='goButton'>GO</button>
</form>

}

export default InputField