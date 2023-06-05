import * as actionTypes from "../actions/actionTypes";

const initialState = {
  todos: [],
  selected: [],
};

const generateID = () => {
  return Math.random().toString(36).slice(2);
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: generateID(),
            text: payload.text,
            completed: false,
            date: new Date().toISOString(),
          },
        ],
      };
    case actionTypes.SET_TO_LOCAL_STORAGE:
      console.log({ payload });
      return { ...state, todos: payload };
    case actionTypes.COMPLETED_TODO:
      const completedTodo = state.todos.map((item) => {
        if (state.selected.includes(item.id)) {
          return { ...item, completed: true };
        }
        return item;
      });

      console.log(completedTodo);
      return {
        ...state,
        selected: [],
        todos: completedTodo,
      };
    case actionTypes.SELECTED_ITEMS:
      const selectedItems = state.todos.find(
        (selectedItem) => selectedItem.id === payload
      );
      if (state.selected.find((selectedItem) => selectedItem === payload)) {
        return {
          ...state,
          selected: [
            ...state.selected.filter(
              (selectedItem) => selectedItem !== payload
            ),
          ],
        };
      }
      return {
        ...state,
        selected: [...state.selected, selectedItems.id],
      };

    case actionTypes.DELETE_SELECTED:
      const filteredTodo = state.todos.filter(
        (item) => !state.selected.includes(item.id)
      );
      console.log(filteredTodo);
      return {
        ...state,
        selected: [],
        todos: filteredTodo,
      };
    case actionTypes.EDIT_TODO:
      const editTodo = state.todos.find((todo) => todo.id === payload.id);
      console.log(editTodo);
      editTodo.text = payload.text;
      return {
        ...state,
        todos: [
          ...state.todos.filter((todo) => todo.id !== payload.id),
          editTodo,
        ],
      };
    case actionTypes.DELETE_TODO:
      const filteredTodos = state.todos.filter((todo) => todo.id !== payload);
      console.log(filteredTodos);
      return {
        ...state,
        todos: filteredTodos,
      };

    default:
      return state;
  }
};

export default todoReducer;
// [
//   ...state.todos.filter((todo) => todo.id !== payload),
//   completeTodo,
// ],
// ...state.selected.filter(
//   (selectedItem) => selectedItem.id !== payload
// ),
// const filteredTodo2 = state.todos.filter((f) =>
//   state.selected.some((item) => item.id === f.id)
// );
// completeTodo.completed = !completeTodo.completed;

// const completeTodo = state.todos.find((todo) => todo.id === payload);

// console.log(completeTodo);
// return {
//   ...state,
//   todos: [
//     ...state.todos.filter((todo) => todo.id !== payload),
//     completeTodo,
//   ],
// };
