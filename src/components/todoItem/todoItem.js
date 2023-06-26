import { useDispatch } from "react-redux";
import { Button } from "../button/button";
import {
  selectedItems,
  deleteTodo,
} from "../../store/localStorageRedux/actions/todosActions";
import dayjs from "dayjs";
import styled from "styled-components";
const StyledLi = styled.li`
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #939697;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background-color: #aad5dd;
  height: 60px;
  margin: 10px;
  padding: 5px 10px;
  display: flex;
`;
const StyledSelectedItem = styled.li`
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #939697;
  cursor: pointer;

  background-color: pink;
  height: 60px;
  width: 100%;

  padding: 5px 10px;
  display: flex;
`;
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
    <StyledLi>
      {!completed ? (
        <>
          <input
            type="checkbox"
            checked={selected}
            onChange={() => dispatch(selectedItems(id))}
          />
          <span>{text}</span>
          <time dateTime={date}>
            {dayjs(date).format("dddd, D  MMMM  YYYY mm:ss")}
          </time>
          <Button onClick={clickOnEditButton}>edit</Button>
        </>
      ) : (
        <StyledSelectedItem>
          <input
            type="checkbox"
            checked={selected}
            onChange={() => dispatch(selectedItems(id))}
          />
          <span>{text}</span>

          <time dateTime={date}>
            {dayjs(date).format("dddd, D  MMMM  YYYY mm:ss")}
          </time>
          <Button onClick={() => dispatch(deleteTodo(id))}>delete</Button>
        </StyledSelectedItem>
      )}
    </StyledLi>
  );
};

export default TodoItem;

/* <Button onClick={() => dispatch(completeTodo(id))}>completed</Button>
<Button onClick={() => dispatch(deleteTodo(id))}>delete</Button> */

// className={cn(`s ${}`)}
/* <ul className={cn("task", { taskCompleted: completed })}>  */
// taskCompleted - is css class
// completed - is field in object
