import "./WheelPressureDisplay.scss";
import { Typography } from "@mui/material";

type Props = {
    pressure: number,
}

const WheelPressureDisplay = (props: Props): JSX.Element => {
    return (
        <div>
            <Typography>
                Wheel pressure: {props.pressure} psi
            </Typography>
        </div>
    );
}

export { WheelPressureDisplay };