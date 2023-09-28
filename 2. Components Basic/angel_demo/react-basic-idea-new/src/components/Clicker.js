import {useState} from 'react';

export const Clicker = (props) => {
    const [clicks, setClicks] = useState(0);
    const clickHandler = (event) => {
        console.log(event);

        setClicks(oldClicks => oldClicks + 1);
    };

    const dangerClick = clicks > 20;

    if (clicks > 30) {
        return <h1>FINISHED</h1>
    }

    return (<div>
        <div>
            {dangerClick && <h1>DANGERRRRRR</h1>}
            {clicks > 10
          ? <h3>Normal Clicks</h3>
          : <h4>Medium clicks</h4>}
        </div>
        <button onClick={clickHandler}>{clicks}</button>

    </div>);
};