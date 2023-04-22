import "./SpeedDisplay.scss";
import { Typography } from "@mui/material";

type Props = {
    speed: number,
}

const SpeedDisplay = (props: Props): JSX.Element => {
    return (
        <div>
            <Typography>
                Prędkość: {props.speed} km/h
            </Typography>
        </div>
    );
}

export { SpeedDisplay };