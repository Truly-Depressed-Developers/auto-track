import "./FuelDisplay.scss";
import { Typography } from "@mui/material";

type Props = {
    fuel: number,
    range: number,
}

const FuelDisplay = (props: Props): JSX.Element => {
    return (
        <div>
            <Typography>
                Fuel: {props.fuel}% - Range: {props.range}
            </Typography>
        </div>
    );
}

export { FuelDisplay };