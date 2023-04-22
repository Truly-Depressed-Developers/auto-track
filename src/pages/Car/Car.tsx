import React, { useEffect, useState } from 'react';
import './Car.scss';

function Car() {
  const [speed, setSpeed] = useState(50);
  const [fuel, setFuel] = useState(100);
  const [liquid, setLiquid] = useState(100);
  const [pressure, setPressure] = useState(100);

  // console.log(speed, fuel, liquid, pressure);


  useEffect(()=>{
    // fetch()
    console.log(`${speed}`)
  }, [speed])

  useEffect(()=>{
    // fetch()
    console.log(`${fuel}`)
  }, [fuel])

  useEffect(()=>{
    // fetch()
    console.log(`${liquid}`)
  }, [liquid])

  useEffect(()=>{
    // fetch()
    console.log(`${pressure}`)
  }, [pressure])
  

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label htmlFor="speed">Speed</label>
          <input type="number" id="speed"  value={speed} onChange={(e)=>{setSpeed(parseInt(e.target.value))}}/> 

          <label htmlFor="fuel">Fuel</label>
          <input type="number" id="fuel" value={fuel} onChange={(e)=>{setFuel(parseInt(e.target.value))}}/> 

          <label htmlFor="liquid">Liquid</label>
          <input type="number" id="liquid"  value={liquid} onChange={(e)=>{setLiquid(parseInt(e.target.value))}}/>

          <label htmlFor="pressure">Pressure</label>
          <input type="number" id="pressure"  value={pressure} onChange={(e)=>{setPressure(parseInt(e.target.value))}}/>
        </form>
      </header>
    </div>
  );
}

export { Car };
