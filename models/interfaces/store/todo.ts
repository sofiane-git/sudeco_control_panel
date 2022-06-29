export interface Todo {
  id: string;
  title: string;
  content?: string | undefined;
  done: boolean;
  createdAt: Date;
  createdBy?: string | undefined;
  updatedAt: Date;
  updatedBy?: string | undefined;
}

export interface TodoState {
  items: Todo[];
}

export interface TodoAdd {
  title: string;
  content?: string | undefined;
  createdAt?: Date | undefined;
}

export interface TodoUpdate {
  title?: string;
  content?: string;
  done?: boolean;
}
