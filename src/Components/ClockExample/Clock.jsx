'use strict'

import {useEffect, useState} from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect( () => {
        setTimeout(tick,1000);
    })

    const tick = () => {
        setTime(new Date().toLocaleTimeString())
    }

    return(
        <p>{time}</p>
    );
}

export default Clock;