import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Button, TextField, CircularProgress, Typography} from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from 'axios';
import '../App.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(9),
            width: theme.spacing(50),
            height: theme.spacing(35),
            padding: theme.spacing(9)

        },
    },
    pad: {
        padding: "50px 400px 0px 400px"
    },
    top: {
        margin: "50px"
    },
    margin: {
        margin: theme.spacing(2),
    },
    
}));

function Login({history}) {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        const payload = {
            email,
            password
        } 
        setLoading(true)
        axios.get(`http://localhost:8000/api/users/current`, payload)
        .then( res => {
            setLoading(false)
            history.push("/Home")
            console.log('res::', res);
            console.log(res.data)
        })
        .catch(err => {
            setLoading(false)
            console.log(err)
        })
         
    }

    return (
        <div className="background">
            <div className={classes.pad} >
                <div className={classes.root}>
        
                    <Paper  elevation={3} >
                        <form>
                            <Typography variant="h5">
                                LOGIN
                            </Typography>
                                    
                            <TextField
                                className={classes.margin}
                                id="current-email"
                                label="Email"
                                type="email"
                                onChange={handleEmailChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircleIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                                    
                            <TextField
                                className={classes.margin}
                                id="current-password"
                                type="password"
                                label="Password"
                                onChange={handlePasswordChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOpenIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <div className={classes.top}>
                                <center>
                                    {loading && <CircularProgress color="secondary" />}       
                                    <Button color="secondary" variant="contained" fullWidth onClick={handleClick}>
                                        Sign In
                                    </Button>
                                    
                                </center>
                            </div>
                        </form>
                    </Paper>
                        
                </div>
                    
                    
            </div>
        </div>
    )
}

export default Login;
