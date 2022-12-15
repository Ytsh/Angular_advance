// store.select('todoState');

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { todoFeatureKey, TodoState } from "./todo.reducer";

export const selectTodoState = createFeatureSelector<TodoState>(todoFeatureKey);

export const selectTodos = createSelector(selectTodoState, (state: TodoState) => state && state.todos);