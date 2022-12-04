import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "./store/todoSlice";
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TodoItem = ({
    completed,
    text,
    id,
    idx
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
        <li>
            <div onClick={(e) => onToggle(e)}>
            <span>{idx + 1}) {text}</span>
            {
                completed
                    ? <ToggleOnIcon />
                    : <ToggleOffIcon />
            }
            </div>
            <DeleteForeverIcon onClick={(e) => onRemove(e)} />
        </li>
    )
}

export { TodoItem }