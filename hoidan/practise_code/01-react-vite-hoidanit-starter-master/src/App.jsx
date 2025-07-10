import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg'
import { useState } from 'react';


const App = () => {


  const[todoList, setTodoList]= useState([
    {id:1, name: "Learning React"},
    {id:2, name: "doing ex"}

  ])

  const hoidanit = "Ngọc Ngọc ";
  const age = 25;
  const data = {
    address: "Cần Thơ",
    country: "Việt Nam"
  }

  const addNewToDo = (name) => {  // chuyền tham số qua bên kia

    const newTodo={
      id:randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodoList([...todoList, newTodo])
    //array.push
    // todoList.push(newTodo)
  }

  // addNewToDo();

  const randomIntFromInterval=(min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}





  return (


    <div className="todo-container">
      <div className="todo-title">Todo list</div>

      <TodoNew
        addNewToDo={addNewToDo}
      />

      <TodoData
        name={hoidanit}
        age={age}
        data={data}
        todoList= {todoList}

      />

      <div className="todo-image">
        <img src={reactLogo} className="logo" alt="React logo" />

      </div>

    </div>
  )
}

export default App
