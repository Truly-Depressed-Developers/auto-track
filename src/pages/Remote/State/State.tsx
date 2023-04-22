import './State.scss';
import { SpeedDisplay } from "../../../components/SpeedDisplay";
import { socket } from '../../../socket';
import { styled } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import { FuelDisplay } from "../../../components/FuelDisplay";
import { WheelPressureDisplay } from "../../../components/WheelPressureDisplay";
import { FluidsDisplay } from "../../../components/FluidsDisplay";
import { LocationDisplay } from "../../../components/LocationDisplay";

function State() {
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

    console.log("stateee")
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
            {/* <LocationDisplay lat={parseFloat(location.split(" ")[0])} lng={parseFloat(location.split(" ")[1])}/> */}
            <LocationDisplay
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `360px`, width: `360px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
        </div>
    );
}

export { State };
