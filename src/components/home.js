import React, { useState,useEffect } from 'react';
export function Home(props) {
    const [count, setCount] = useState(5);
  
    useEffect(() => {
        setCount(count + 1)
    }, []);
    
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
