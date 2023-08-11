import { useState } from 'react';

export default function Clicker(props) {
    const [clicks, setClicks] = useState(0);

    const clickHandler = (event) => {
        setClicks((oldClicks) => oldClicks + 1);
    };
    if (clicks > 29) {
        return <h1>MAX CLICKS</h1>;
    }
    return (
        <div>
            <h1>{clicks > 15 && <h1>MEGA GIGAAA</h1>}</h1>
            <h2>{clicks > 10 ? 'Normal Clicks' : 'Mega clicks'}</h2>
            <button onClick={clickHandler}>{clicks}</button>;
        </div>
    );
}
