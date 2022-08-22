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
    btn: {
        fontSize: 60,
        backgroundColor: 'violet',
        '&:hover': {
            backgroundColor: 'blue',
        },
    },
    title: {
        textDecoration: 'underline',
        marginBottom: 20,
    },
});

function Create() {
    const classes = useStyles();

    return (
        <Container>
            {/* <Typography variant='h1' color='primary' align='center'>
                Create a new note
            </Typography> */}

            {/* <Typography color='secondary' noWrap>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur laborum cum tempora delectus quo rerum dolore porro! Molestiae ipsam nostrum reiciendis iusto quam blanditiis facere, amet officiis natus velit?
            </Typography> */}

            <Typography variant='h6' component='h2' gutterBottom color='textSecondary' className={classes.title}>
                Create a new note
            </Typography>

            <Button type='submit' color='secondary' variant='contained'
                disableElevation onClick={() => console.log('click!')}
                startIcon={<KeyboardArrowRightIcon/>} endIcon={<SendIcon/>}>Submit</Button>

            {/* using user-defined css from earlier in classes.btn */}
            <Button className={classes.btn} type='submit' color='secondary' variant='contained'
                onClick={() => console.log('click!')}>Submit</Button>
            {/* disableElevation prop gets rid of the drop shadow */}


            {/* icons */}
            <br/>
            <AcUnitOutlinedIcon color='primary' fontSize='large'/>
            <AcUnitOutlinedIcon color='secondary' fontSize='small'/>
            <AcUnitOutlinedIcon color='action' fontSize='large'/>
            <AcUnitOutlinedIcon color='error' fontSize='large'/>
            <AcUnitOutlinedIcon color='disabled' fontSize='large'/>




            {/* <Button type='submit' color='primary'>Submit</Button>
            <Button type='submit' color='secondary' variant='outlined'>Submit</Button>

            <ButtonGroup color='secondary' variant='contained'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>             */}
        </Container>
    );
}

export default Create;
