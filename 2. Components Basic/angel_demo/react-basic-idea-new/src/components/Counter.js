import {useState} from 'react';

export const Counter = (props) => {
    const [counter, setCounter] = useState(props.start || 0);
    const plusHandler = (e) => {
        setCounter(oldCounter => oldCounter + 1);
    };

    const minusHandler = (e) => {
        setCounter(oldCounter => (oldCounter - 1) < 0 ? 0 : oldCounter - 1);
    };

    function clearHandler() {
        setCounter(0);
    }

    let countTitle = '';

    if (counter < 10) {
        countTitle = 'Counter';
    }else if (counter < 20) {
        countTitle = 'Turbo Counter';
    } else {
        countTitle = 'Hello Counterrr';
    }

    return (<div>
          <h1 style={{fontSize: 44 + counter + 'px'}}>{countTitle}</h1>
          <h2>{counter}</h2>
        <button onClick={minusHandler}>-</button>
        <button onClick={clearHandler}>Clear</button>
        <button onClick={plusHandler}>+</button>
      </div>);
};