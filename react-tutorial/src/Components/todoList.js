import './style.css';
import TodoItem from './todoItem'

function TodoList() {
  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default TodoList;