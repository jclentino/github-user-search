import React, { useState } from "react";
import { IconButton, Stack, TextField, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const Searcher = ({ setInputUser, notFound }) => {
    const [valueInput, setValueInput] = useState('')

    const onSearchValueChange = (event)=> {
        setValueInput(event.target.value)
    }

    const handleSubmit = ()=> {
        setInputUser(valueInput)
    }

    return (
        <>
            <Stack 
                direction='row' 
                sx={{
                    marginTop: '30px',
                    width: '80%'
                }}
            >
                <TextField 
                    id="outlined-basic" 
                    label="Github User"
                    placeholder="Octocat" 
                    variant="outlined" 
                    size="small"
                    value={valueInput}
                    onChange={onSearchValueChange}
                    sx={{
                        width: '90%',
                        
                    }}
                />
                <IconButton 
                    onClick={handleSubmit}
                    size="small"
                    sx={{
                        left: '-45px'
                    }}
                >
                    <SearchIcon />
                </IconButton>
            </Stack>
            <Typography 
                color='red' 
            >
                {
                    notFound 
                        ? 'Error: usuario no existe'
                        : ''
                }
            </Typography>
        </>
        
    )
}

export default Searcher;