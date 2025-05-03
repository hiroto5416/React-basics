import "./App.css";
import { Button } from "./components/Button";
import { Button2 } from "./components/Button2";

function App() {
  const handleClick = () => {
    alert("ボタンがクリックされました");
  };

  const handleClick2 = () => {
    alert("Button2がクリックされました");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TypeScriptでの最初のReactコンポーネント</h1>
        <Button
          text="クリックしてください"
          onClick={handleClick}
          color="green"
        />
        <Button
          text="クリックしてください"
          onClick={() => alert("２つの目のボタンがクリックされました。")}
          color="purple"
        />
        <Button2 text="クリックしてください" onClick={handleClick2} color="red" />
      </header>
    </div>
  );
}

export default App;
