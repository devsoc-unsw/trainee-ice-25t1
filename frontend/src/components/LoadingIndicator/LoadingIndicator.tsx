import { Typography } from "@mui/material"
import { Leapfrog } from 'ldrs/react'
import 'ldrs/react/Leapfrog.css'
import { CenteredColumnBox } from "./LoadingIndicatorStyles"

type LoadingIndicatorProps = {
    loadingIndicatorColor: string;
    textColor: string;
    textToDisplay: string;
}

const LoadingIndicator = ({ loadingIndicatorColor, textColor, textToDisplay } : LoadingIndicatorProps) => {
    return (
        <CenteredColumnBox>
            <Leapfrog
            size="40"
            speed="2.5"
            color={loadingIndicatorColor}
            />
            <Typography variant="h6" sx={{padding: "1rem", color: `${textColor}`}}>
                {textToDisplay}
            </Typography>
        </CenteredColumnBox>
    )
}

export default LoadingIndicator;