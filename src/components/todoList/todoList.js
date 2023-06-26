import { useSelector } from "react-redux";
import TodoItem from "../todoItem/todoItem";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTodosToLocalStorage } from "../../store/localStorageRedux/actions/todosActions";
const TodoList = ({ setSelectedToEditItem }) => {
  const todos = useSelector((state) => state.todoReducers.todos);
  const selectedTodos = useSelector((state) => state.todoReducers.selected);

  const dispatch = useDispatch();
  useEffect(() => {
    if (todos?.length) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos?.length) {
      // console.log(todos);
      dispatch(setTodosToLocalStorage(todos));
    }
  }, [dispatch]);

  return (
    <ul>
      {todos
        ?.sort((a, b) => (a.date > b.date ? -1 : 1))
        .sort((a, b) => (a.completed < b.completed ? -1 : 1))
        .map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            {...todoItem}
            clickOnEditButton={function () {
              setSelectedToEditItem(todoItem);
            }}
            selected={selectedTodos.includes(todoItem.id)}
          />
        ))}
    </ul>
  );
};

export default TodoList;

// .sort((a, b) =>
// a.date > b.date
//   ? -1
//   : Number(a.date > b.date).sort((a, b) => a.completed - b.completed)
// )
// console.log(localStorage.getItem("todos"), localStorage.todos);

// .sort(function (a, b) {
//   return a.addTime() - b.addTime();
// })

// selected={
//   selectedTodos.find(
//     (selectedTodo) => selectedTodo.id === todoItem.id
//   ) || false
// }

// var data = [
//   {
//     property1: "A",
//     addTime: Date.now(1),
//   },
//   {
//     property1: "B",
//     addTime: Date.now(2),
//   },
//   {
//     property1: "C",
//     addTime: Date.now(3),
//   },
// ];
// {data
// .sort((a, b) =>
//   a.date < b.date ? -1 : Number(a.date > b.date)
// )
//   .map((date) => (
//     <div key={date.property1}>{date.addTime}</div>
//   ))}{" "}
// (a, b) => (a.date > b.date ? -1 : Number(a.date > b.date)
// {console.log(data)}
