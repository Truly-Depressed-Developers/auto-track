import React, { useState, useEffect } from 'react';
import './Remote.scss';
import { SpeedDisplay } from "../../components/SpeedDisplay";
import { FuelDisplay } from "../../components/FuelDisplay";
import { WheelPressureDisplay } from "../../components/WheelPressureDisplay";
import { FluidsDisplay } from "../../components/FluidsDisplay";
import { LocationDisplay } from "../../components/LocationDisplay";
import { socket } from '../../socket'

function Remote() {
    const [speed, setSpeed] = useState(0);
    useEffect(() => { socket.on('speed', setSpeed) }, [socket, speed]);

    const [fuel, setFuel] = useState(0);
    useEffect(() => { socket.on('fuel', setFuel) }, [socket, fuel]);
    const [range, setRange] = useState(0);
    useEffect(() => { socket.on('range', setRange) }, [socket, range]);
    const [wheelPressure, setWheelPressure] = useState([0,0,0,0]);
    useEffect(() => { socket.on('wheelPressure', setWheelPressure) }, [socket, wheelPressure]);

    const [engineOil, setEngineOil] = useState(0);
    useEffect(() => { socket.on('engineOil', setEngineOil) }, [socket, engineOil]);
    const [coolant, setCoolant] = useState(0);
    useEffect(() => { socket.on('coolant', setCoolant) }, [socket, coolant]);
    const [powerSteeringFluid, setPowerSteeringFluid] = useState(0);
    useEffect(() => { socket.on('powerSteeringFluid', setPowerSteeringFluid) }, [socket, powerSteeringFluid]);
    const [brakeFluid, setBrakeFluid] = useState(0);
    useEffect(() => { socket.on('brakeFluid', setBrakeFluid) }, [socket, brakeFluid]);
    const [transmissionFluid, setTransmissionFluid] = useState(0);
    useEffect(() => { socket.on('transmissionFluid', setTransmissionFluid) }, [socket, transmissionFluid]);
    const [windscreenWasherFluid, setWindscreenWasherFluid] = useState(0);
    useEffect(() => { socket.on('windscreenWasherFluid', setWindscreenWasherFluid) }, [socket, windscreenWasherFluid]);

    const [location, setLocation] = useState('');
    useEffect(() => { socket.on('location', setLocation) }, [socket, location]);

    return (
        <div>
            <SpeedDisplay speed={speed}/>
            <FuelDisplay fuel={fuel} range={range}/>
            <WheelPressureDisplay pressure={wheelPressure}/>
            <FluidsDisplay 
                engineOil={engineOil}
                coolant={coolant}
                powerSteeringFluid={powerSteeringFluid}
                brakeFluid={brakeFluid}
                transmissionFluid={transmissionFluid}
                windscreenWasherFluid={windscreenWasherFluid}
            />
            <LocationDisplay lat={parseFloat(location.split(" ")[0])} lng={parseFloat(location.split(" ")[1])}/>
        </div>
    );
}

export { Remote };
