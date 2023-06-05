import { useDispatch } from "react-redux";
import { Button } from "../button/button";
import { selectedItems, deleteTodo } from "../../store/actions/todosActions";
import "./todoItem.css";
import cn from "classnames";
import dayjs from "dayjs";
const TodoItem = ({
  id,
  selected,
  text,
  date,
  clickOnEditButton,
  completed,
}) => {
  const dispatch = useDispatch();

  return (
    <ul className={cn("task-container", { taskCompleted: completed })}>
      {!completed ? (
        <>
          <input
            type="checkbox"
            checked={selected}
            onChange={() => dispatch(selectedItems(id))}
          />
          <span className="span">{text}</span>

          <time className="time" dateTime={date}>
            {dayjs(date).format("dddd, D  MMMM  YYYY mm:ss")}
          </time>
          <Button onClick={clickOnEditButton}>edit</Button>
        </>
      ) : (
        <>
          <input
            className="none"
            type="checkbox"
            checked={selected}
            onChange={() => dispatch(selectedItems(id))}
          />
          <span className="span">{text}</span>
          <time className="time" dateTime={date}>
            {dayjs(date).format("dddd, D  MMMM  YYYY mm:ss")}
          </time>
          <Button onClick={() => dispatch(deleteTodo(id))}>delete</Button>
        </>
      )}
    </ul>
  );
};

export default TodoItem;

/* <Button onClick={() => dispatch(completeTodo(id))}>completed</Button>
<Button onClick={() => dispatch(deleteTodo(id))}>delete</Button> */

// className={cn(`s ${}`)}
/* <ul className={cn("task", { taskCompleted: completed })}>  */
// taskCompleted - is css class
// completed - is field in object
