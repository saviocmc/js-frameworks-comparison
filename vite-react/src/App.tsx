import { useState } from 'react';
import css from './App.module.css';

export default function App() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [todoInputValue, setTodoInputValue] = useState<string>('');

  const addNewTodo = (event: React.FormEvent) => {
    event.preventDefault();
    setTodoList([...todoList, todoInputValue]);
    setTodoInputValue('');
  }

  return (
    <div className={css.App}>
      <h1>TODO APP - ViteJS React</h1>
      <ul>
        {todoList.map((todo, index) =>
          <li key={index}>{todo}</li>
        )}
      </ul>
      <form onSubmit={(event) => addNewTodo(event)} >
        <input
          placeholder="add todo..."
          value={todoInputValue}
          onChange={(event) => setTodoInputValue(event.target.value)}
        />
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  )
}
