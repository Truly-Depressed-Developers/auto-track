import "./FluidsDisplay.scss";
import { Typography } from "@mui/material";

type Props = {
    engineOil: number,
    coolant: number,
    powerSteeringFluid: number,
    brakeFluid: number,
    transmissionFluid: number,
    windscreenWasherFluid: number,
}

const FluidsDisplay = (props: Props): JSX.Element => {
    return (
        <div id="fluidsDisplay">
            <Typography>Engine oil: {props.engineOil}</Typography>
            <Typography>Coolant: {props.coolant}</Typography>
            <Typography>Power steering fluid: {props.powerSteeringFluid}</Typography>
            <Typography>Brake fluid: {props.brakeFluid}</Typography>
            <Typography>Transmission fluid: {props.transmissionFluid}</Typography>
            <Typography>Windscreen washer fluid: {props.windscreenWasherFluid}</Typography>
        </div>
    );
}

export { FluidsDisplay };