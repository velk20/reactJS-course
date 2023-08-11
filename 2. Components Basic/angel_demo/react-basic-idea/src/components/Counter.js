import { useState } from 'react';

export default function Counter(props) {
    const [counter, setCounter] = useState(props.start || 0);
    const decreaseHandler = (event) => {
        if (counter == 0) {
            return;
        }
        setCounter((oldCounter) => oldCounter - 1);
    };
    const increaseHandler = (event) => {
        setCounter((oldCounter) => oldCounter + 1);
    };

    return (
        <div>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={increaseHandler}>+</button>
            <button onClick={decreaseHandler}>-</button>
        </div>
    );
}
