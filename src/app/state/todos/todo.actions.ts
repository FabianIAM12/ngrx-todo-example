import { createAction, props } from '@ngrx/store';
import { Todo } from '../../todo/todo.model';

export const addTodo = createAction(
  '[Todo Page] Add Todo',
  props<{ content: string }>()
);

export const removeTodo = createAction(
  '[Todo Page] Remove Todo',
  props<{ id: string }>()
);

// 1. triggered while load todos
export const loadTodos = createAction('[Todo Page] Load Todos');

// 2. triggered by success
export const loadTodosSuccess = createAction(
  '[Todo API] Todo Load Success',
  props<{ todos: Todo[] }>()
);

// 3. triggered by failure
export const loadTodosFailure = createAction(
  '[Todo API] Todo Load Failure',
  props<{ error: string }>()
);
