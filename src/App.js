import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  let equal = () => {
    if (value !== undefined && value !== '') {
      try {
        // Evaluate the expression and round to 2 decimal places
        const result = eval(value);
        setValue(result.toFixed(2));  // Round to 2 decimals
      } catch (error) {
        alert("Invalid calculation");
      }
    } else {
      alert("Please enter a valid calculation");
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className='display'>
            <input type="text" value={value} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={() => setValue('')} />
            <input type="button" value="DE" onClick={() => setValue(value.slice(0, -1))} />
            <input type="button" value="." onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="/" onClick={(e) => setValue(value + e.target.value)} />
          </div>

          <div>
            <input type="button" value="7" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="8" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="9" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="*" onClick={(e) => setValue(value + e.target.value)} />
          </div>

          <div>
            <input type="button" value="4" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="5" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="6" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="+" onClick={(e) => setValue(value + e.target.value)} />
          </div>

          <div>
            <input type="button" value="1" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="2" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="3" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="-" onClick={(e) => setValue(value + e.target.value)} />
          </div>

          <div>
            <input type="button" value="00" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="0" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="=" className='equal' onClick={equal} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
