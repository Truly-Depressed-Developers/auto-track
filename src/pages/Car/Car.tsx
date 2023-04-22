import React, { useEffect, useState } from 'react';
import './Car.scss';
import { socket } from '../../socket';

function Car() {
  const [speed, setSpeed] = useState(0);
  useEffect(() => { socket.emit('speed', speed) }, [socket, speed]);
  const [fuel, setFuel] = useState(100);
  useEffect(() => { socket.emit('fuel', fuel) }, [socket, fuel]);
  const [range, setRange] = useState(0);
  useEffect(() => { socket.emit('range', range) }, [socket, range]);
  const [wheelPressure, setWheelPressure] = useState<number[]>([0, 0, 0, 0]);
  useEffect(() => { socket.emit('wheelPressure', wheelPressure) }, [socket, wheelPressure]);
  // const [wheelPressure, setWheelPressure] = useState(0);
  // useEffect(() => { socket.emit('wheelPressure', wheelPressure) }, [socket, wheelPressure]);
  const [engineOil, setEngineOil] = useState(0);
  useEffect(() => { socket.emit('engineOil', engineOil) }, [socket, engineOil]);
  const [coolant, setCoolant] = useState(0);
  useEffect(() => { socket.emit('coolant', coolant) }, [socket, coolant]);
  const [powerSteeringFluid, setPowerSteeringFluid] = useState(0);
  useEffect(() => { socket.emit('powerSteeringFluid', powerSteeringFluid) }, [socket, powerSteeringFluid]);
  const [brakeFluid, setBrakeFluid] = useState(0);
  useEffect(() => { socket.emit('brakeFluid', brakeFluid) }, [socket, brakeFluid]);
  const [transmissionFluid, setTransmissionFluid] = useState(0);
  useEffect(() => { socket.emit('transmissionFluid', transmissionFluid) }, [socket, transmissionFluid]);
  const [windscreenWasherFluid, setWindscreenWasherFluid] = useState(0);
  useEffect(() => { socket.emit('windscreenWasherFluid', windscreenWasherFluid) }, [socket, windscreenWasherFluid]);

  const [engine, setEngine] = useState(false);
  useEffect(() => { socket.on('engine', setEngine); console.log(engine) }, [socket, engine]);

  const [alarm, setAlarm] = useState(false);
  useEffect(() => { socket.on('alarm', setAlarm); console.log(alarm) }, [socket, alarm]);

  const [autopilot, setAutopilot] = useState(false);
  useEffect(() => { socket.on('autopilot', setAutopilot); console.log(autopilot) }, [socket, autopilot]);

    const [location, setLocation] = useState("50.068132 19.912979");
    useEffect(() => { socket.emit('location', location) }, [socket, location]);

  return (
    <div className="App">
      <header className="App-header">
        <form id="car">
          <label htmlFor="speed">Speed</label>
          <input type="number" id="speed" value={speed} onChange={e => { setSpeed(parseInt(e.target.value)) }} />

          <label htmlFor="fuel">Fuel</label>
          <input type="number" id="fuel" value={fuel} onChange={e => { setFuel(parseInt(e.target.value)) }} />

          <label htmlFor="range">Range</label>
          <input type="number" id="range" value={range} onChange={e => { setRange(parseInt(e.target.value)) }} />

          <label htmlFor="pressure">Pressure</label>
          <div>
            {Array.from(Array(4).keys()).map(ind => (
              <input type="number" id="pressure" value={wheelPressure[ind]} onChange={e => {
                if(e.target.value == "") return;
                wheelPressure[ind] = parseInt(e.target.value);
                setWheelPressure([...wheelPressure])
              }} />
            ))}
          </div>

          <label htmlFor="engineOil">Engine oil</label>
          <input type="number" id="engineOil" value={engineOil} onChange={e => { setEngineOil(parseInt(e.target.value)) }} />

          <label htmlFor="coolant">Coolant</label>
          <input type="number" id="coolant" value={coolant} onChange={e => { setCoolant(parseInt(e.target.value)) }} />

          <label htmlFor="powerSteeringFluid">Power steering fluid</label>
          <input type="number" id="powerSteeringFluid" value={powerSteeringFluid} onChange={e => { setPowerSteeringFluid(parseInt(e.target.value)) }} />

          <label htmlFor="brakeFluid">Brake fluid</label>
          <input type="number" id="brakeFluid" value={brakeFluid} onChange={e => { setBrakeFluid(parseInt(e.target.value)) }} />

          <label htmlFor="transmissionFluid">Transmission fluid</label>
          <input type="number" id="transmissionFluid" value={transmissionFluid} onChange={e => { setTransmissionFluid(parseInt(e.target.value)) }} />

          <label htmlFor="windscreenWasherFluid">Windscreen washer fluid</label>
          <input type="number" id="windscreenWasherFluid" value={windscreenWasherFluid} onChange={e => { setWindscreenWasherFluid(parseInt(e.target.value)) }} />

          <label htmlFor="engine">engine</label>
          <input type="checkbox" id="engine" checked={engine} disabled />

          <label htmlFor="alarm">light</label>
          <input type="checkbox" id="alarm" checked={alarm} disabled />

          <label htmlFor="autopilot">mask</label>
          <input type="checkbox" id="autopilot" checked={autopilot} disabled />
        </form>
      </header>
    </div>
  );
}

export { Car };
