export interface ITask{
    taskName:string;
  }

  export interface Props{
    task:ITask;
    completeTask(taskDeleteName:string):void;
  }
