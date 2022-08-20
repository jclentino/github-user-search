import React from "react";
import { Stack, Typography } from "@mui/material";
import PaperInformation from '../../components/PaperInformation'
import LocationInformation from "../../components/LocationInformation";

const Description = (props)=> {
    const { userState } = props 
    const { bio } = userState 

    return (
        <>
            <Stack>
                {
                    bio !== null 
                        ? <Typography>{bio}</Typography>
                        : <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Typography> 
                }
            </Stack>
            <PaperInformation userState={userState} />
            <LocationInformation userState={userState} />
        </>
    )
}

export default Description