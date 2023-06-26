import * as actionTypes from "./actionTypes";

export const addTodo = (text) => ({
  type: actionTypes.ADD_TODO,
  payload: text,
});

export const deleteTodo = (id) => ({
  type: actionTypes.DELETE_TODO,
  payload: id,
});

export const completeTodo = (id) => ({
  type: actionTypes.COMPLETED_TODO,
  payload: id,
});

export const editTodo = (id, text) => ({
  type: actionTypes.EDIT_TODO,
  payload: { id, text },
});

export const selectedItems = (id) => ({
  type: actionTypes.SELECTED_ITEMS,
  payload: id,
});

export const deleteSelected = () => ({
  type: actionTypes.DELETE_SELECTED,
});

export const setTodosToLocalStorage = (todos) => ({
  type: actionTypes.SET_TO_LOCAL_STORAGE,
  payload: todos,
});
