import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import HeaderBar from './components/HeaderBar'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div style={{width:"100%"}}>
        <div>
          <HeaderBar/>
        </div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={(props) => 
              <Home/>
            }>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      
    );
  }
}

export default App;
