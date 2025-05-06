import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/ Home";
import { Todo } from "./pages/Todo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Todo" element={<Todo />} />
    </Routes>
  );
}

export default App;
