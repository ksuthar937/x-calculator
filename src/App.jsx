import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = (action) => {
    setInput((prev) => prev + action);
  };

  const handleExecute = () => {
    if (input === "") {
      return setResult("Error");
    }
    setResult(eval(input));
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  return (
    <main>
      <h1>React Calculator</h1>
      <input value={input} disabled />
      <div className="result">{result}</div>
      <div>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("*")}>*</button>
      </div>
      <div>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={handleExecute}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </main>
  );
}

export default App;
