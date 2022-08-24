import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import Todopanel from './components/Todopanel/Todopanel';

const DEFAULT_TODO_LIST = [
  { id: 1, name: 'task 1', description: 'description 1', checked: false },
  { id: 2, name: 'task 2', description: 'description 2', checked: false },
  {
    id: 3,
    name: 'task 3',
    description:
      'so long task description 3 so long task description so long task description so long task description so long task description',
    checked: true
  }
];

function App() {
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);
  return ( 
    <div className="App">
      <Header counttodo={todos.length}/>
      <Todopanel/>
    </div>
  );
}

export default App;
