import React from 'react';
import {AppBar, Toolbar,Button} from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  
  
}));


function NavBar({history}) {
    const classes = useStyles();
    

   

    function handleClick() {
      history.push("/")
    }
    function handleClickMember(){
      history.push("/Members")
    }

    function handleClickMembership(){
      history.push("/Home")
    }
    

    return (
      <div>
        <div className={classes.root}>
          <AppBar position="fixed">
            <Toolbar>
            
              <Button className={classes.title} onClick={handleClickMembership} color="inherit">
                Directory
              </Button>
              
              <div >
                <Button color="inherit" onClick={handleClickMember} data-testid="buttons">
                  SMS-Messages
                </Button>
                <Button color="inherit" onClick={handleClick} data-testid="button">
                  Logout
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </div>
  
            
      </div>
    )
}

export default withRouter(NavBar);
