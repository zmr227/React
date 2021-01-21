import logo from './logo.svg';
import './App.css';
import TodoItem from './Components/todoItem'

function App() {
  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
