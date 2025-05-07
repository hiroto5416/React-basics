import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export const Todo = () => {
  const navigate = useNavigate();
  // Todo入力用のstate
  const [inputText, setInputText] = useState("");

  // Todoリスト用のstate
  const [todos, setTodos] = useState<TodoItem[]>([]);

  // 新しいTodoを追加する関数
  const addTodo = () => {
    // 空の入力は無視
    if (!inputText.trim()) return;

    // 新しいTodoアイテムを作成
    const newTodo: TodoItem = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };

    // 既存のリストに新しいTodoを追加
    setTodos([...todos, newTodo]);

    // 入力フィールドをクリア
    setInputText("");
  };

  // Todoの完了状態を切り替える関数
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        // 対象のTodoだけcompletedを変転、それ以外はそのまま
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Todoを削除する関数
  const deleteTodo = (id: number) => {
    // filter関数で対象のTodoを除外した新しい配列を作成
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <button onClick={() => navigate("/")}>戻る</button>

      <div>
        <h1>Todoリスト</h1>

        <div>
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="新しいタスクを入力..."
          />
          <button onClick={addTodo}>追加</button>
        </div>

        <ul>
          {todos.length === 0 ? (
            <p>タスクがありません。新しいタスクを追加しましょう！</p>
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
                <button onClick={() => deleteTodo(todo.id)}>削除</button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};
