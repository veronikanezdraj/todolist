import { useDispatch } from "react-redux";
import styled from "styled-components";
import InputField from "../../components/inputField/inputField";
import TodoList from "../../components/todoList/todoList";
import { useState } from "react";
import {
  addTodo,
  editTodo,
  completeTodo,
  deleteSelected,
} from "../../store/localStorageRedux/actions/todosActions";
import { Button } from "../../components/button/button";
import { useSelector } from "react-redux";

const StyledWraper = styled.div`
  width: 90%;
  top: 50%;
  left: 50%;
  background: rgb(115, 185, 194);
  border-radius: 10px;
  min-width: 450px;
  position: absolute;
  min-height: 500px;
  transform: translate(-50%, -50%);
`;
const StyledSelected = styled.div`
  align-items: center;
  cursor: pointer;
  height: 60px;
  margin-left: 50px;
  padding: 5px 10px;
  display: flex;
`;
const LocalStorage = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const [selectedToEditItem, setSelectedToEditItem] = useState(null);
  const selectedTodos = useSelector((state) => state.todoReducers.selected);

  const editTask = () => {
    if (selectedToEditItem) {
      dispatch(editTodo(selectedToEditItem.id, selectedToEditItem.text));
      setSelectedToEditItem(null);
    }
  };

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <StyledWraper>
      {selectedTodos.length > 0 && (
        <StyledSelected>
          <Button onClick={() => dispatch(completeTodo())}>
            completed ({selectedTodos.length})
          </Button>
          <Button onClick={() => dispatch(deleteSelected())}>
            delete ({selectedTodos.length})
          </Button>
        </StyledSelected>
      )}
      <div>
        <InputField
          selectedToEditItem={selectedToEditItem}
          setSelectedToEditItem={setSelectedToEditItem}
          text={text}
          handelInput={setText}
          handleSubmit={addTask}
          handleEdit={editTask}
        />
        <TodoList setSelectedToEditItem={setSelectedToEditItem} />
      </div>
    </StyledWraper>
  );
};
export default LocalStorage;
