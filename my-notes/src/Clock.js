import React, {useState} from 'react'
import './Clock.css'

function Clock() {
    let time = new Date().toLocaleTimeString();
    let [cTime, setTime] = useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setTime(time);

    };

    setInterval(updateTime, 1000);
    return (
        <div className="clock">
            <p>{cTime}</p>
        </div>
    )
}

export default Clock;
