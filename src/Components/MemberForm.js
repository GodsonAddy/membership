import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, TextField, Button, CircularProgress} from '@material-ui/core';
import Transition from './Transition'
import Telephone from './Telephone';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(9),
      width: theme.spacing(60),
      height: theme.spacing(60),
      padding:theme.spacing(10),
      
    },
  },
  form: {
    margin: theme.spacing(1),
  },
  space: {
    margin:"50px 250px 0px 250px"
  }
 
}));


const MemberForm = () => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [team, setTeam] = useState("");
  const [work, setWork] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  const classes = useStyles();

  
  const handleClick = (e) => {
    e.preventDefault();

    const newPerson = {
      first_name: firstName,
      last_name: lastName,
      complete: false,
      email: email,
      phone_number: phoneNum,
      work_place: work,
      team_members: team,
        
    }
    setLoading(true)
    axios.post(`http://localhost:8000/api/members`, newPerson)
    .then( res => {
      setLoading(false)
        
      console.log('res::', res);
      console.log(res.data)
    })
    .catch(err => {
      setLoading(false)
      console.log(err)
    }) 
    
    setLastName("")
    setFirstName("")
    setEmail("")
    setWork("")
    setPhoneNum("")
    setTeam("")
  } 
  
  const firstname = (e) => {
    setFirstName(e.target.value)
  }
  const lastname = (e) => {
    setLastName(e.target.value)
  }
  const handlePhoneChange = (e) => {
    console.log('value:::', e.target.value)
    setPhoneNum(e.target.value)
  }
  const teamMates = (e) => {
    console.log('team:::', e.target.value)
    setTeam(e.target.value)
  }
  const workPlace = (e) => {
    setWork(e.target.value)
  }
  const emailA = (e) => {
    setEmail(e.target.value)
  }

 
  return (
    <div className={classes.space}>
    <div className={classes.root}>
      <Paper variant="elevation" elevation={3} >
        <div>
          <form className={classes.form} spacing={2}>
            <TextField id="username" margin="normal"  value={firstName}
              label="First name" type="name" variant="outlined" onChange={firstname} 
            />
            <TextField id="username"  margin="normal"  value={lastName}
              label="Last name" type="name" variant="outlined" onChange={lastname}
            />
            <TextField id="outlined-search" margin="normal" onChange={workPlace}
              fullWidth label="Place of Work" type="name" variant="outlined" value={work}
            />
            <Telephone handlePhoneChange={handlePhoneChange} value={phoneNum} />

            <TextField id="Email" margin="normal" onChange={emailA} value={email}
              fullWidth label="Email" type="email" variant="outlined" 
            />
           
            <Transition handleTeamMates={teamMates} value={team} />
            <br />
            
            <div>
              <center>
                {loading && <CircularProgress color="secondary" />}
                <Button color="secondary" variant="contained" onClick={handleClick}>
                  Send
                </Button>
              </center>
            </div>
          </form>
        </div>
        </Paper>   
    </div>
    </div>
  )
}

export default MemberForm;
