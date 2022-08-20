import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = (props)=> {
    const { userState } = props 
    const { location, twitter_username, blog, company } = userState 

    console.log(location)
    console.log(twitter_username)
    console.log(blog)
    console.log(company)


    return (
        <>
            <Grid container >
                <Grid item xs={6}>
                    <Stack>
                        <LocationOnIcon />
                        {
                            location !== null 
                                ? <Typography>{location}</Typography>
                                : <Typography>Not Available</Typography>
                        }        
                    </Stack>
                </Grid>

                <Grid item xs={6}>
                    <Stack>
                        <TwitterIcon />
                        {
                            twitter_username !== null 
                                ? <Typography>@{twitter_username}</Typography>
                                : <Typography>Not Available</Typography>
                        }
                    </Stack>
                </Grid>

                <Grid item xs={6}>
                    <Stack>
                        <LanguageIcon />
                        {
                            blog !== '' 
                                ? <Typography>{blog}</Typography>
                                : <Typography>Not Available</Typography>
                        }
                    </Stack>
                </Grid>

                <Grid item xs={6} >
                    <Stack>
                        <BusinessIcon />
                        {
                            company !== null 
                                ? <Typography>{company}</Typography>
                                : <Typography>Not Available</Typography>
                        }
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default LocationInformation