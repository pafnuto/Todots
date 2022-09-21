export interface ITask{
    taskName:string;
  }

  export interface IProps{
    task:ITask;
    completeTask(taskDeleteName:string):void;
  }
