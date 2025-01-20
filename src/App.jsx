import { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="p-8 text-center content-center">
        <h1 style={{ 
          color: "blue",
         }}>Hello React</h1>
        <button onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
        >
          Click me
        </button>
        {count === 0 ? (
            <p className="mt-2">None</p>
        ) : (
            <p className="mt-2">You clicked {count} times</p>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
