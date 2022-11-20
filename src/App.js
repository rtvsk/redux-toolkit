import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";
import './App.css';
import TodoList from "./TodoList";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
      <TextField value={text} onChange={onChangeText} />
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={onAddTodo}
      >
        ADD
      </Button>
      <TodoList />
    </div>
  );
}

export default App;
