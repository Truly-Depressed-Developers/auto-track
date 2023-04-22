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


const LocationDisplay = (props: Props): JSX.Element => {
    const MyMap = withScriptjs(withGoogleMap((props2: google.maps.MapOptions) => 
    (<GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
    />)
    ));
    return (
        <div>
            <Typography>
                lat: {props.lat}
                len: {props.lng}
            </Typography>
            <MyMap
                    googleMapURL={"https://maps.googleapis.com/maps/api/js?key="}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `360px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                {/* <Marker position={{ lat: -34.397, lng: 150.644 }} /> */}
        </div>
    );
}

export { LocationDisplay };