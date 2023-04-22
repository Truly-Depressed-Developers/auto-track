import React, { useState, useEffect } from 'react';
import './Remote.scss';
import { SpeedDisplay } from "../../components/SpeedDisplay";
import { socket } from '../../socket'

function Remote() {
    const [speed, setSpeed] = useState(0);

    // useEffect(() => {
    //     socket.on('speed', (data) => setSpeed(data));
    // }, [socket, speed]);

    return (
        <div>
            <SpeedDisplay
                speed={speed}
            />
        </div>
    );
}

export { Remote };
