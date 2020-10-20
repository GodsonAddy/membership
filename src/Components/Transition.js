import React from "react";
import {TextField, Button} from "@material-ui/core";
import { CSSTransition } from "react-transition-group";
import "../App.css";


export default class Transition extends React.Component {
  constructor(props){super(props);
  this.state = { show: false };}
  renderTextField() {
    // if (!this.state.show) {
    //   return null;
    // }
    const handleTeamMates = this.props.handleTeamMates;
    const value = this.props.value;
  
    return (
      <div className="TestWrapper">
        <div>Names:</div>

        <TextField 
          id="outlined-basic" 
          variant="outlined" 
          multiline rows={4} 
          onChange={handleTeamMates} 
          InputProps={{
            inputComponent: 
            value
          }}
        />
      </div>
    );
  }

  renderButton() {
    return (
      <Button onClick={() => this.setState({ show: !this.state.show })}
        variant="outlined" 
        color="primary" 
        data-testid="button"
        >
        We're a team!
      </Button>
    );
  }

  render() {
    return (
      <>
        {this.renderButton()}
        <CSSTransition
          in={this.state.show}
          timeout={400}
          classNames="Test"
          unmountOnExit
        >
          {this.renderTextField()}
        </CSSTransition>
      </>
    );
  }
}
