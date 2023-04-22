import './Location.scss';
import { LocationDisplay } from "../../../components/LocationDisplay";

function Location() {
    return (
        <div id="location">
            {/* <LocationDisplay lat={parseFloat(location.split(" ")[0])} lng={parseFloat(location.split(" ")[1])}/> */}
            <LocationDisplay
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `calc(100vh - 82px)`, width: `360px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
        </div>
    );
}

export { Location };
