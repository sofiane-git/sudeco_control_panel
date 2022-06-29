export interface Todo {
  id: string;
  label: string;
  content?: string | undefined;
  done: boolean;
  createdAt: Date;
  createdBy?: string | undefined;
  updatedAt: Date;
  updatedBy?: string | undefined;
}

export type Todos = Todo[] | undefined[];

export interface TodoState {
  items: Todos;
}

export interface TodoAdd {
  label: string;
  content?: string | undefined;
}

export interface TodoUpdate {
  label?: string;
  content?: string;
  done?: boolean;
}
