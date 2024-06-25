import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";

import Todoitems from "./Components/Todoitems";

function App() {

  const todoItems =[
    {
      name : "Buy milk",
      Duedate : "24/06/2024",
  },
  {
    name : "Go to College",
    Duedate : "24/06/2024",

  },
  {
    name : "prajwal gonna make it",
    Duedate : "31/05/2025",
  },
];

  return (
    <center className='todo-container'>
     
      <AppName></AppName>
      <AddTodo></AddTodo>
      <Todoitems todoItems={todoItems}></Todoitems>

    </center>
  );
}

export default App;
