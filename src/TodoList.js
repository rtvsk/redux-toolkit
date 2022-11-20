import { memo } from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);
    console.log(todos);
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    completed={todo.completed}
                    text={todo.text}
                    id={todo.id}
                />
            ))}
        </ul>
    )
}

export default memo(TodoList);