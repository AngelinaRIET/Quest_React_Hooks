import React, { useState } from 'react';

const Counter = () => {
    // Declares a new state variable, which we will call "count"
    // Declares a setCount function that allows you to modify the count value
    const [count, setCount] = useState(0);

    return (
        <div>
            <label htmlFor="start-value"></label>
            <input id="start-value" type="text" value={count} onChange={e => setCount(Number(e.target.value))}></input>
            <p>The counter is at : {count} </p>
            <button onClick={() => setCount(count + 1)}>
                +1
      </button>
            <button onClick={() => setCount(count - 1)}>
                -1
      </button>
        </div>
    );
}

export default Counter;