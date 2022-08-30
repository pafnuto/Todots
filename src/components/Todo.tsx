import {Props} from '../types';
import './Components.scss';
import { AiTwotoneDelete } from "react-icons/ai";

export const Todo = ({task,completeTask}:Props) => {
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

