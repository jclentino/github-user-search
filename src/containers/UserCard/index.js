import { CardMedia, Grid } from "@mui/material";
import React from "react";
import PrincipalInformation from "../../components/PrincipalInformation";

const UserCard = ({ userState }) => {
    
    const { avatar_url } = userState

    return (
        <Grid
            contenedor
        >
            <Grid item xs={3}>
                <CardMedia 
                    component="img"
                    alt="GitHub User"
                    image={avatar_url}
                />
            </Grid>

            <Grid item xs={9}>
            </Grid>

            <PrincipalInformation userState={userState} />
        </Grid>
    );
}

export default UserCard