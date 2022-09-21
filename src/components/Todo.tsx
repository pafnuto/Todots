import {IProps} from '../types';
import './Components.scss';
import { AiTwotoneDelete } from "react-icons/ai";

//создаем запись с кнопкой удаления записи
export const Todo = ({task,completeTask}:IProps) => {
    return (
<div className="task">
    <div className="content">
        {task.taskName}
    </div>
<button onClick={()=>{
      completeTask(task.taskName);
    }}><AiTwotoneDelete/></button>
</div>
    );
};

