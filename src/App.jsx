import React, { useState } from "react";
import { Container } from "@mui/material";
import Searcher from "./components/Searcher";


const App = ()=>  {
    const [inputUser, setInputUser] = useState('Octocat');

    const containerStyles = {
        background: 'whitesmoke',
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

    return (
        <Container sx={containerStyles}>
            <Searcher inputUser={inputUser} setInputUser={setInputUser} />
        </Container>
    );
}

export default App;
