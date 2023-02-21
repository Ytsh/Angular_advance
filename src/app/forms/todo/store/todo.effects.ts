import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as TodoActions from './todo.actions';
import {switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../todo.model';

@Injectable()
export class TodoEffects {

  constructor(private readonly actions$: Actions,
              private readonly http: HttpClient) {
  }

  fetchTodos$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.fetchTodos),
    switchMap(() => {
      return this.http.get<Todo[]>(`http://localhost:3000/todos`).pipe(
        switchMap(response => [TodoActions.setTodos({todos: response})]),
        catchError((err: HttpErrorResponse | TimeoutError) => EMPTY)
      );
    })
  ));
}