import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/ Home";
import { Todo } from "./pages/Todo";
import {Todo2} from "./pages/Todo2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Todo" element={<Todo />} />
      <Route path="/Todo2" element={<Todo2 />} />
    </Routes>
  );
}

export default App;
