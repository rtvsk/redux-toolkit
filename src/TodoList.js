import { memo } from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);
    return (
        <ul>
            {todos.map((todo, i) => (
                <TodoItem
                    key={todo.id}
                    completed={todo.completed}
                    text={todo.text}
                    id={todo.id}
                    idx={i}
                />
            ))}
        </ul>
    )
}

export default memo(TodoList);