import React from 'react'
const default_todo={
  name:'',
  description:''
};

export const Todopanel = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { value, name } = event.target;
  setTodo({ ...todo, [name]: value });
};
  const [todo,setTodo] = React.useState(default_todo)
  return (
    <div className='Todopanel'>
        <label htmlFor="Название задачи">
        <input type="text" id='name' name='name'  value = {todo.name} onChange={onChange} /></label>
        <label htmlFor="Описание задачи">
        <input type="text" id='description' name='description' value = {todo.description} onChange={onChange} /></label>
        <button>Добавить</button>   
    </div>
  )
}

export default Todopanel;