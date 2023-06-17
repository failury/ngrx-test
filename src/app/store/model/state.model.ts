import { TodoItem  } from "./model";

export interface AppState {
  todolist: Array<TodoItem>;
  loading: boolean;
  error: string | null;
}