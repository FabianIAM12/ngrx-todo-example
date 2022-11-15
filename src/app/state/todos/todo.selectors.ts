import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { TodoState } from './todo.reducer';

// Only the state we are interested in - from the main object
export const selectTodos = (state: AppState) => state.todos;
// We just want the todos data only
export const selectAllTodos = createSelector(
  selectTodos,
  (state: TodoState) => state.todos
);

// define different selectors as well?
