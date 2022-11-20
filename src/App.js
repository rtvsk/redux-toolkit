import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";
import './App.css';
import TodoList from "./TodoList";

function App() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const onChangeText = (e) => {
    setText(e.target.value);
  }

  const onAddTodo = () => {
    dispatch(addTodo({ text }));
    setText('');
  }

  return (
    <div className="App">
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={onAddTodo}>+</button>
      <TodoList />
    </div>
  );
}

export default App;
