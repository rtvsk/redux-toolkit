import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "./store/todoSlice";

const TodoItem = ({
    completed,
    text,
    id
}) => {
    const dispatch = useDispatch();

    const onRemove = (e) => {
        e.stopPropagation();
        dispatch(removeTodo({ id }));
    }

    const onToggle = (e) => {
        e.stopPropagation();
        dispatch(toggleTodo({ id }));
    }

    return (
        <li onClick={(e) => onRemove(e)}>
            {text}
            <div onClick={(e) => onToggle(e)}>
                {completed ? ": true" : ": false"}
            </div>
        </li>
    )
}

export { TodoItem }