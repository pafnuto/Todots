import React, { FC,ChangeEvent, useState} from 'react';
import {ITask} from '../types';
import {Todo} from './Todo'
import './Components.scss'

export const Header:FC =() => {
//обьявляем константы
const [task, setTask] = useState<string>("");
const [todo, setTodo] = useState<ITask[]>([]);
let [error, setError] = useState<boolean>(false)
//событие по нажатию кнопки
const handleChange = (e:ChangeEvent<HTMLInputElement>) :void =>{
        if (e.target.name === "task"){
        setTask(e.target.value);
        }}
//кнопка добавления задачи
const addTask = ():void =>{const newTask = {
    taskName:task,
};
    setTodo([...todo, newTask])
    setTask("");}

    const onError = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) setError(false)
        setTask(e.currentTarget.value)
    }
    const userMessage =
        error
            ? <div style={{color: 'red'}}> Title is required </div>
            : <div> Please, create list item</div>
const completeTask = (taskNameToDelete:string):void =>{
    setTodo(todo.filter((task)=>{
          return task.taskName !== taskNameToDelete
    }))}
      
return(
<>
<div className="header">
    <div className="inputTask">
    <input type="text"
           placeholder='Введите задачу' 
           name='task'
           value={task}
           onChange={handleChange} />
           <button onClick={addTask}>Добавить задачку</button>
           {userMessage}
    </div>
    </div>
<div className='taskList'>
        {todo.map((task:ITask, key:number)=>{
          return <Todo key={key} task={task} completeTask={completeTask} />
        })}
</div>
</>
)}
