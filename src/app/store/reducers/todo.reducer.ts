import { TodoItem } from '../model/model';
import { createReducer, Action, on } from '@ngrx/store';
import {
  AddTodoSuccessAction,
  DeleteTodoSuccessAction,
  FetchTodosSuccessAction,
  UpdateTodoSuccessAction,
} from '../actions/todo.action';
import { AppState } from '../model/state.model';

const initialState: AppState = {
  todolist: [],
  loading: false,
  error: null,
};

const reducer = createReducer(
  initialState,
  on(FetchTodosSuccessAction, (state, { todos }) => ({
    ...state,
    todolist: todos,
  })),
  on(UpdateTodoSuccessAction, (state, { todo }) => ({
    ...state,
    todolist: state.todolist.map((t) => (t.id === todo.id ? todo : t)),
  })),
  on(AddTodoSuccessAction, (state, { todo }) => ({
    ...state,
    todolist: [...state.todolist, todo],
  })),
  on(DeleteTodoSuccessAction, (state, { id }) => ({
    ...state,
    todolist: state.todolist.filter((t) => t.id !== id),
  }))
);

export function TodoReducer(state: AppState | undefined, action: Action) {
  return reducer(state, action);
}
