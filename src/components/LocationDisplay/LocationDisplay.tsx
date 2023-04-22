import { useState, useEffect } from "react";
import { socket } from '../../socket'

import "./LocationDisplay.scss";
import { Typography } from "@mui/material";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

type Props = {
    lat: number,
    lng: number,
}

interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
    children?: React.ReactElement<google.maps.MarkerOptions>;
}


const LocationDisplay = withScriptjs(withGoogleMap((props: Props): JSX.Element => {
    // const MyMap = withScriptjs(withGoogleMap((props2: google.maps.MapOptions) => 
    // (<GoogleMap
    //     defaultZoom={15}
    //     defaultCenter={{ lat: props.lat, lng: props.lng }}
    // />)
    // ));

    const [lat, setLan] = useState(50.068132);
    const [lng, setLng] = useState(19.912979);
    useEffect(() => { socket.on('location', loc => {
        setLan(parseFloat(loc.split(' ')[0]))
        setLng(parseFloat(loc.split(' ')[1]))
    }) }, [socket, lat, lng]);

    return (
        <div>
            {/* <Typography>
                lat: {lat}
                lng: {lng}
            </Typography> */}
            <GoogleMap
                defaultZoom={15}
                defaultCenter={{ lat, lng }}
                center={{ lat, lng }}
            />
                {/* <Marker position={{ lat: -34.397, lng: 150.644 }} /> */}
        </div>
    );
}))

export { LocationDisplay };