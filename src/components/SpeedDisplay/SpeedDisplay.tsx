import "./SpeedDisplay.scss";
import { Typography } from "@mui/material";

type Props = {
    speed: number,
}

const SpeedDisplay = (props: Props): JSX.Element => {
    return (
        // frame 11
        <div className="progress-container">
            {/* frame 10 */}
            <div className="progress-bar">
                <div className="rectangle14" style={{left: `${3+Math.floor(props.speed/150 *100)}%`}}></div>
                <div className="frame9">
                    <span className="text120">{props.speed} km/h</span>
                    <div className="rectangle13"></div>
                </div>
            </div>
            <span className="speed-text">SPEED</span>
        </div>
    );
}

export { SpeedDisplay };