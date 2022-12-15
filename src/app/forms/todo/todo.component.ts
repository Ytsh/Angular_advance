import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { deleteTodo, saveOrUpdateTodo } from './store/todo.actions';
import { selectTodos } from './store/todo.selectors';
import { Todo } from './todo.model';
import {filter, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  todoDescriptionFormControl = new FormControl('', [Validators.required]);
  todoIdFormControl = new FormControl(null, [Validators.required]);

  constructor(private readonly store: Store) {

  }
  
  private unsubscribe = new Subject<void>();
  
  ngOnInit(): void {
    this.store.pipe(
      select(selectTodos),
      filter(state => state.length > 0),
      takeUntil(this.unsubscribe)
    ).subscribe(todos => {
      this.todos = todos;
    });
  }

  undoOrCompleteTodo(item: Todo) {
    // this.todos = this.todos.map(todo => todo.id === item.id ? {...todo, done: !todo.done} : todo);
    // const todo: Todo = {...item, done: !item.done};
    this.store.dispatch(saveOrUpdateTodo({todo:item, isUpdate: true}));
  }

  deleteTodo(id: number) {
    // const todo = this.todos.find(todo => todo.id === id);
    // if (todo) {
    //   this.todos.splice(this.todos.indexOf(todo), 1);
    // }
    this.store.dispatch(deleteTodo({todoId : id}));
  }

  addTodo(): void {
    if (this.todoIdFormControl.value && this.todoIdFormControl.value >= 0 && !this.todos.find(t => t.id === this.todoIdFormControl.value)) {
      const todo: Todo = {
        id: this.todoIdFormControl.value,
        description: this.todoDescriptionFormControl.value ?? '',
        done: false
      }
      // this.todos.push(todo);
      this.store.dispatch(saveOrUpdateTodo({todo, isUpdate: false}));
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
