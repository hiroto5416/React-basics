import React, { useState } from "react";

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export const Todo2 = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodos = () => {
    if (inputText.trim() === "") return;
    const newTodo = {
      id: todos.length + 1,
      text: inputText,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputText("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todoリスト2</h1>

      <div>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="新しいタスクを入力"
        />
        <button onClick={addTodos}>追加</button>
      </div>

      <ul>
        {todos.length === 0 ? (
          <p>タスクが存在しません、新しく追加しましょう！</p>
        ) : (
          todos.map((todo) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button onClick={() => handleDelete(todo.id)}>削除</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
