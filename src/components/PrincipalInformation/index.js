import { Stack, Typography } from "@mui/material";
import React from "react";

const PrincipalInformation = ({ userState: { name, login, created_at }})=> {
    
    return (
        <>
            <Stack 
                direction="row" 
                sx={{
                    justifyContent: 'space-between'
                }}
            >
                <Typography variant="h4" >{name}</Typography>
                <Typography variant="subtitle">{created_at}</Typography>
            </Stack>  
            <Typography variant="caption">@{login}</Typography>
        </>       
    )
}

export default PrincipalInformation