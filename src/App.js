import React from 'react';
import Main from './Routes/Main';
import Login from './Components/Login';
import {Switch, Route} from 'react-router-dom';
import memberSearch from './Routes/memberSearch';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={Main} />
        <Route exact path="/Members" component={memberSearch} />
        <Route  path="/" component={Login} />
      </Switch>
     
    </div>
  );
}

export default App;
