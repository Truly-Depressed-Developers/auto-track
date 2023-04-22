import "./FuelDisplay.scss";
import { Typography } from "@mui/material";

type Props = {
    fuel: number,
    range: number,
}

const FuelDisplay = (props: Props): JSX.Element => {
    return (
        // <div>
        //     <Typography>
        //         Fuel: {props.fuel}% - Range: {props.range}
        //     </Typography>
        // </div>

        <div className="progress-fuel-container">
            {/* frame 10 */}
            <div className="progress-bar">
                <div className="frame9">
                    <div className="rectangle14-fuel" style={{"width": `${8+props.fuel*0.92}%`}}></div>
                    <span className="text120">{props.fuel}%</span>
                    <div className="rectangle13"></div>
                </div>
            </div>
            <span className="speed-text">FUEL</span>
        </div>
    );
}

export { FuelDisplay };