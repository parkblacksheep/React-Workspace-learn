import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Form1 from "./Form";
import Form2 from "./Form2";
import ConditionalRendering1 from "./ConditionalRendering1";
import ConditionalRendering2 from "./ConditionalRendering2";

function App() {
  const [count, setCount] = useState(100);

  const up = () => {
    alert("up 함수 호출");
    setCount(count + 1);
  };
  const down = () => {
    alert("down 함수 호출");
    setCount(count - 1);
  };

  return (
    <>
      <h1>React useState</h1>
      <h2>count 값: {count}</h2>
      <div className="card">
        <button onClick={up}>+ plus </button>
        <button onClick={down}>- minus</button>
      </div>
      <Form1 />
      <Form2 />
      <ConditionalRendering1 />
      <ConditionalRendering2 />
    </>
  );
}

export default App;
