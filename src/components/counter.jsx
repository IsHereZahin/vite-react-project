import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 style={{ color: 'gray' }}>Hello React</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      {count === 0 ? (
        <p>None</p>
      ) : (
        <p>You clicked {count} times</p>
      )}
    </div>
  );
};

export default Counter;
