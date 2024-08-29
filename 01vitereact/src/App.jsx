import { useState } from 'react';
import './App.css';

function App() {

  let [counter, setCounter] = useState(0);

  const addToCounter = () => {
    setCounter(counter + 1)
  }

  const removeFromCounter = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>
        Hello Utkarsh, Welcome to Vite + React
        <h2>Counter value: {counter}</h2>
        <button onClick={addToCounter}>Increment</button>
        <br />
        <button onClick={removeFromCounter}>Decrement</button>
      </h1>
    </>
  )
}

export default App
