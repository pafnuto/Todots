export interface Itodo {
    id: string;
    text: string;
    isDone: boolean;
    createdDate: string;
  }
  
  export type TodoContextType = {
    todos: Itodo[];
    addTodo: (todo: Itodo) => void;
    updateTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
  };
  