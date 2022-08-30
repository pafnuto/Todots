import React, { FC,ChangeEvent, useState} from 'react';
import {ITask} from '../types';
import {Todo} from './Todo'
import './Components.scss'

export const Header:FC =() => {
//обьявляем константы
const [task, setTask] = useState<string>("");
const [todo, setTodo] = useState<ITask[]>([]);
//событие
const handleChange = (event:ChangeEvent<HTMLInputElement>) :void =>{
        if (event.target.name === "task"){
        setTask(event.target.value);
        }}
//кнопка добавления задачи
const addTask = ():void =>{const newTask = {
    taskName:task,
};
    setTodo([...todo, newTask])
    setTask("");}

const completeTask = (taskNameToDelete:string):void =>{
    setTodo(todo.filter((task)=>{
          return task.taskName !== taskNameToDelete
    }))}
      
return(
<>
<div className="header">
    <div className="inputButton">
    <input type="text"
           placeholder='Введите задачу' 
           name='task'
           value={task}
           onChange={handleChange} />
           <button onClick={addTask}>Добавить задачку</button>
    </div>
    </div>
<div className='taskList'>
        {todo.map((task:ITask, key:number)=>{
          return <Todo key={key} task={task} completeTask={completeTask} />
        })}
</div>
</>
)}