import React, { useState } from "react";
import "./App.css";

function App() {
  // хук useState
  const [count, setCount] = useState(0);

  // Функции для увеличения, уменьшения и сброса счётчика
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="App">
      <h1>Счётчик: {count}</h1>
      <button onClick={handleIncrement}>Увеличить</button>
      <button onClick={handleDecrement}>Уменьшить</button>
      <button onClick={handleReset}>Сбросить</button>
    </div>
  );
}

export default App;
