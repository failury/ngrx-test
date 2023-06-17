import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { TodoService } from 'src/app/service/todo.service';
import * as TodoActions from '../actions/todo.action';
import { of } from 'rxjs';

@Injectable()
export class TodoEffect {
  constructor(private actions$: Actions, private todoService: TodoService) {}
  fetchTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.FetchTodosAction),
      exhaustMap(() =>
        this.todoService.fetchTodos().pipe(
          map((todos) => TodoActions.FetchTodosSuccessAction({ todos })),
          catchError((error) =>
            of(TodoActions.FetchTodosErrorAction({ error }))
          )
        )
      )
    );
  });
  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.AddTodoAction),
      exhaustMap(({ todo }) =>
        this.todoService.addTodo(todo).pipe(
          map((todo) => TodoActions.AddTodoSuccessAction({ todo: todo })),
          catchError((error) => of(TodoActions.AddTodoErrorAction({ error })))
        )
      )
    )
  );
  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.DeleteTodoAction),
      exhaustMap(({ id }) =>
        this.todoService.deleteTodo(id).pipe(
          map(() => TodoActions.DeleteTodoSuccessAction({ id })),
          catchError((error) =>
            of(TodoActions.DeleteTodoErrorAction({ error }))
          )
        )
      )
    )
  );

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.UpdateTodoAction),
      exhaustMap(({ todo }) =>
        this.todoService.updateTodo(todo).pipe(
          map(() => TodoActions.UpdateTodoSuccessAction({ todo })),
          catchError((error) =>
            of(TodoActions.UpdateTodoErrorAction({ error }))
          )
        )
      )
    )
  );
}
