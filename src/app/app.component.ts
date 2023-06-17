import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoItem } from './store/model/model';
import { AppState } from './store/model/state.model';
import { Observable, first } from 'rxjs';
import { AddTodoAction, DeleteTodoAction, FetchTodosAction, UpdateTodoAction } from './store/actions/todo.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  TodoList$!: Observable<Array<TodoItem>>;
  newValue: string = '';
  constructor(private store: Store<{ AppState: AppState }>) {}
  ngOnInit() {
    this.TodoList$ = this.store.select((store) => store.AppState.todolist);
    this.store.dispatch(FetchTodosAction());
  }

  handleAddToDo() {
    this.store
      .select((store) => store.AppState.todolist.length)
      .pipe(first())
      .subscribe((newId) => {
        console.log(newId);
        const todo: TodoItem = {
          id: newId,
          title: this.newValue,
          completed: false,
        };
        this.store.dispatch(AddTodoAction({ todo: todo }));
        this.newValue = '';
      });
  }

  handleDelete(id: number) {
    this.store.dispatch(DeleteTodoAction({ id }));
  }

  handleComplete(todo: TodoItem) {
    const updatedTodo: TodoItem = { ...todo, completed: !todo.completed };
    this.store.dispatch(UpdateTodoAction({ todo: updatedTodo }));
  }
}
