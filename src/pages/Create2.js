import React from "react";
import { Typography, Button, ButtonGroup, Container } from '@material-ui/core';
// search for icons from here: https://mui.com/material-ui/material-icons/#main-content
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {makeStyles} from '@material-ui/core';

// using external, user-written styles with material ui:
// key is like a css selector (class/id), value is an object containing its styling declarations
const useStyles = makeStyles({

});

function Create() {
    const classes = useStyles();

    return (
        <Container>
            <Typography variant='h6' component='h2' gutterBottom color='textSecondary'>
                Create a new note
            </Typography>

            <Button type='submit' color='secondary' variant='contained'
                disableElevation onClick={() => console.log('click!')}
                startIcon={<KeyboardArrowRightIcon/>} endIcon={<SendIcon/>}>Submit</Button>
        </Container>
    );
}

export default Create;
