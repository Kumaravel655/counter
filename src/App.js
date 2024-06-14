import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <h2>Name: Student Name</h2>
        <h2>Regno: Student Regno</h2>
        <div className="counter">
          <p>{count}</p>
          <div className="buttons">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
