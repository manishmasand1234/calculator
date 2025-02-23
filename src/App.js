import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

 
  const calculate = () => {
    if (value.trim() !== "") {
      try {
        const result = eval(value);
        setValue(Number.isInteger(result) ? result.toString() : result.toFixed(2)); // No .00 if integer
      } catch (error) {
        alert("Invalid calculation");
      }
    }
  };

  
  const handleKeyPress = (event) => {
    if (/[\d\+\-\*\/\.]/.test(event.key)) {
      setValue((prev) => prev + event.key);
    } else if (event.key === "Enter") {
      event.preventDefault();
      calculate();
    } else if (event.key === "Backspace") {
      setValue((prev) => prev.slice(0, -1));
    } else if (event.key === "Escape") {
      setValue("");
    }
  };

  
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          <input type="text" value={value} readOnly />
        </div>
        <div className="buttons">
          <button className="clear" onClick={() => setValue("")}>AC</button>
          <button className="delete" onClick={() => setValue(value.slice(0, -1))}>DE</button>
          <button className="operator" onClick={() => setValue(value + ".")}>.</button>
          <button className="operator" onClick={() => setValue(value + "/")}>/</button>

          <button onClick={() => setValue(value + "7")}>7</button>
          <button onClick={() => setValue(value + "8")}>8</button>
          <button onClick={() => setValue(value + "9")}>9</button>
          <button className="operator" onClick={() => setValue(value + "*")}>×</button>

          <button onClick={() => setValue(value + "4")}>4</button>
          <button onClick={() => setValue(value + "5")}>5</button>
          <button onClick={() => setValue(value + "6")}>6</button>
          <button className="operator" onClick={() => setValue(value + "+")}>+</button>

          <button onClick={() => setValue(value + "1")}>1</button>
          <button onClick={() => setValue(value + "2")}>2</button>
          <button onClick={() => setValue(value + "3")}>3</button>
          <button className="operator" onClick={() => setValue(value + "-")}>-</button>

          <button onClick={() => setValue(value + "00")}>00</button>
          <button onClick={() => setValue(value + "0")}>0</button>
          <button className="equal" onClick={calculate}>=</button>
        </div>
      </div>

      <div className="footer">
        <p>@Made by Manish Singh</p>
      </div>
    </div>
  );
}

export default App;
