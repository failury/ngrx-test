import { createAction, props } from '@ngrx/store';
import { TodoItem } from '../model/model';

// Fetch Todos Actions
export const FetchTodosAction = createAction('[Todo] Fetch Todos');
export const FetchTodosSuccessAction = createAction(
  '[Todo] Fetch Todos Success',
  props<{ todos: TodoItem[] }>()
);
export const FetchTodosErrorAction = createAction(
  '[Todo] Fetch Todos Error',
  props<{ error: string }>()
);

// Add Todo Actions
export const AddTodoAction = createAction(
  '[Todo] Add Todo',
  props<{ todo: TodoItem }>()
);
export const AddTodoSuccessAction = createAction(
  '[Todo] Add Todo Success',
  props<{ todo: TodoItem }>()
);
export const AddTodoErrorAction = createAction(
  '[Todo] Add Todo Error',
  props<{ error: string }>()
);

// Update Todo Actions
export const UpdateTodoAction = createAction(
  '[Todo] Update Todo',
  props<{ todo: TodoItem }>()
);
export const UpdateTodoSuccessAction = createAction(
  '[Todo] Update Todo Success',
  props<{ todo: TodoItem }>()
);
export const UpdateTodoErrorAction = createAction(
  '[Todo] Update Todo Error',
  props<{ error: string }>()
);
// Delete Todo Actions
export const DeleteTodoAction = createAction(
  '[Todo] Delete Todo',
  props<{ id: number }>()
);
export const DeleteTodoSuccessAction = createAction(
  '[Todo] Delete Todo Success',
  props<{ id: number }>()
);
export const DeleteTodoErrorAction = createAction(
  '[Todo] Delete Todo Error',
  props<{ error: string }>()
);