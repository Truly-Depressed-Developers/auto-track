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
            <span className="title">FLUIDS</span>

            <div className="fluid-data">
                <span>Engine oil:</span> <span>{props.engineOil}</span>
                <span>Coolant: </span><span> {props.coolant} </span>
                <span>Power steering fluid: </span><span>{props.powerSteeringFluid}</span>
                <span>Brake fluid: </span><span>{props.brakeFluid}</span>
                <span>Transmission fluid: </span><span>{props.transmissionFluid}</span>
                <span>Windscreen washer fluid:</span><span>{props.windscreenWasherFluid}</span>
                {/* <Typography>Engine oil: {props.engineOil}</Typography> */}
                {/* <Typography>Coolant: {props.coolant}</Typography> */}
                {/* <Typography>Power steering fluid: {props.powerSteeringFluid}</Typography> */}
                {/* <Typography>Brake fluid: {props.brakeFluid}</Typography> */}
                {/* <Typography>Transmission fluid: {props.transmissionFluid}</Typography> */}
                {/* <Typography>Windscreen washer fluid: {props.windscreenWasherFluid}</Typography> */}
            </div>
        </div>
    );
}

export { FluidsDisplay };