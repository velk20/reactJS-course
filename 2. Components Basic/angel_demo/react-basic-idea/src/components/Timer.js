import React from 'react';

export default function Timer(props) {
    const [hours, setHours] = React.useState(props.start || 0);
    const [minutes, setMinutes] = React.useState(props.start || 0);
    const [seconds, setSeconds] = React.useState(props.start || 0);

    setTimeout(() => {
        if (seconds == 59) {
            setSeconds(0);
            setMinutes(minutes + 1);
            if (minutes == 59) {
                setMinutes(0);
                setHours(hours + 1);
                if (hours == 24) {
                    setHours(0);
                }
            }
        } else {
            setSeconds(seconds + 1);
        }
    }, 1000);

    return (
        <div>
            <h2>
                Timer: {hours}:{minutes}:{seconds} sec.
            </h2>
        </div>
    );
}
