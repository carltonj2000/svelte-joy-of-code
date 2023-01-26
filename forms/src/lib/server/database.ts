type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

let todos: Todo[] = [
  {
    id: 1,
    text: 'Learn How froms work',
    completed: false
  }
];

export function getTodos() {
  return todos;
}

export function addTodos(text: string) {
  const todo: Todo = { id: Date.now(), text, completed: false };
  todos.push(todo);
}

export function removeTodos(id: number) {
  const todosNew = todos.filter((td) => td.id !== id);
  todos = todosNew;
}

export function updateTodos(id: number, completed: boolean) {
  todos.forEach((td) => {
    if (td.id === id) {
      td.completed = completed;
    }
  });
  console.log(JSON.stringify(todos, null, 2));
}

export function clearTodos() {
  todos = [];
}
