import React, { useState, useEffect, useCallback } from 'react';
import './Actions.scss';
import { SpeedDisplay } from "../../../components/SpeedDisplay";
import { socket } from '../../../socket';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function Actions() {
   const [engine, setEngine] = useState(true);
   const [alarm, setAlarm] = useState(false);
   // const [driveDirection, setDriveDirection] = useState()
   const [autopilot, setAutopilot] = useState(true);

   // const engineCallback = useCallback(() => {
   //    setEngine(!engine);
   // }, [engine]);

   // const alarmCallback = useCallback(() => {
      
   // }, [alarm]);

   // const setDriveDirectionCallback = useCallback(() => {
   //    setDriveDirectionCallback
   // }, [])

   // const autopilotOnCallback = useCallback(() => {

   // }, [])

   useEffect(() => { socket.emit('engine', engine) }, [socket, engine]);
   useEffect(() => { socket.emit('alarm', alarm) }, [socket, alarm]);
   useEffect(() => { socket.emit('autopilot', autopilot) }, [socket, autopilot]);



   // const IOSSwitch = styled((props: SwitchProps) => (
   //    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
   // ))(({ theme }) => ({
   //    width: 42,
   //    height: 26,
   //    padding: 0,
   //    '& .MuiSwitch-switchBase': {
   //       padding: 0,
   //       margin: 2,
   //       transitionDuration: '300ms',
   //       '&.Mui-checked': {
   //          transform: 'translateX(16px)',
   //          color: '#fff',
   //          '& + .MuiSwitch-track': {
   //             backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
   //             opacity: 1,
   //             border: 0,
   //          },
   //          '&.Mui-disabled + .MuiSwitch-track': {
   //             opacity: 0.5,
   //          },
   //       },
   //       '&.Mui-focusVisible .MuiSwitch-thumb': {
   //          color: '#33cf4d',
   //          border: '6px solid #fff',
   //       },
   //       '&.Mui-disabled .MuiSwitch-thumb': {
   //          color:
   //             theme.palette.mode === 'light'
   //                ? theme.palette.grey[100]
   //                : theme.palette.grey[600],
   //       },
   //       '&.Mui-disabled + .MuiSwitch-track': {
   //          opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
   //       },
   //    },
   //    '& .MuiSwitch-thumb': {
   //       boxSizing: 'border-box',
   //       width: 22,
   //       height: 22,
   //    },
   //    '& .MuiSwitch-track': {
   //       borderRadius: 26 / 2,
   //       backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
   //       opacity: 1,
   //       transition: theme.transitions.create(['background-color'], {
   //          duration: 500,
   //       }),
   //    },
   // }));


   return (
      <div className='actions-container'>

         <div className="switch-container">
            <FormControlLabel
               control={
                  <Switch
                     sx={{ m: 1 }}
                     // defaultChecked
                     checked={engine}
                     onChange={e => setEngine(e.target.checked)}
                  />
               }
               label="Engine"
            />
            <FormControlLabel
               control={
                  <Switch
                     sx={{ m: 1 }}
                     // defaultChecked
                     checked={alarm}
                     onChange={e => setAlarm(e.target.checked)}
                  />
               }
               label="Alarm"
            />
            <FormControlLabel
               control={
                  <Switch
                     sx={{ m: 1 }}
                     // defaultChecked
                     checked={autopilot}
                     onChange={e => setAutopilot(e.target.checked)}
                  />
               }

               label="Autopilot"
            />

         </div>
      </div>
   );
}

export { Actions };
