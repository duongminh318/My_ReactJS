import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg'


const App = () => {



  return (


    <div className="todo-container">
      <div className="todo-title">Todo list</div>

     <TodoNew/>

     <TodoData/>

      <div className="todo-image">
           <img src={reactLogo} className="logo" alt="React logo" />

      </div>

    </div>
  )
}

export default App
