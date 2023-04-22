import "./WheelPressureDisplay.scss";
import { Typography } from "@mui/material";

type Props = {
    pressure: number[],
}

const WheelPressureDisplay = (props: Props): JSX.Element => {
    return (
        <div className="wheel-pressure-display">
            <span>TIRE PRESSURE</span>
            {/* <Typography>
                Wheel pressure: {props.pressure.join(", ")} psi
            </Typography> */}

            <div className="pressure-container">
                <span>{props.pressure[0]}</span>
                <div className="wheel"></div>
                <div></div>
                <div className="wheel"></div>
                <span>{props.pressure[1]}</span>
                <span>{props.pressure[2]}</span>
                <div className="wheel"></div>
                <div></div>
                <div className="wheel"></div>
                <span>{props.pressure[3]}</span>
            </div>

        </div>
    );
}

export { WheelPressureDisplay };