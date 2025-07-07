import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg'


const App = () => {

  const hoidanit = "Ngọc Ngọc ";
  const age = 25;
  const data = {
    address: "Cần Thơ",
    country: "Việt Nam"
  }

  const addNewToDo = (name) => {

    alert(`call me ${name}`);
  }

  // addNewToDo();



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

      />

      <div className="todo-image">
        <img src={reactLogo} className="logo" alt="React logo" />

      </div>

    </div>
  )
}

export default App
