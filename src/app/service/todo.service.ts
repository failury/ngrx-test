import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from '../store/model/model';
@Injectable()
export class TodoService {
  private apiUrl = 'http://localhost:3000/todos'; // Replace with your API endpoint

  constructor(private http: HttpClient) {
    console.log('TodoService created');
  }

  fetchTodos(): Observable<TodoItem[]> {
    console.log('Fetching todos');
    return this.http.get<TodoItem[]>(this.apiUrl);
  }
  updateTodo(todo: TodoItem): Observable<TodoItem> {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.put<TodoItem>(url, todo);
  }
  addTodo(todo: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.apiUrl, todo);
  }
  deleteTodo(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
