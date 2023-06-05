import { useDispatch } from "react-redux";
import "./local_Storage.css";
import InputField from "../../components/inputField/inputField";
import TodoList from "../../components/todoList/todoList";
import { useState } from "react";
import {
  addTodo,
  editTodo,
  completeTodo,
  deleteSelected,
} from "../../store/actions/todosActions";
import { Button } from "../../components/button/button";
import { useSelector } from "react-redux";

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
    <>
      {selectedTodos.length > 0 && (
        <div className="selected">
          <Button onClick={() => dispatch(completeTodo())}>
            completed ({selectedTodos.length})
          </Button>
          <Button onClick={() => dispatch(deleteSelected())}>
            delete ({selectedTodos.length})
          </Button>
        </div>
      )}
      <div className="container ">
        <h2 className="header">TO DO LIST</h2>
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
    </>
  );
};
export default LocalStorage;
