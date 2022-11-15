import { TodoState } from './todos/todo.reducer';

// e.g. for other state, for example nothing that has to do with state
export interface AppState {
  todos: TodoState;
}
