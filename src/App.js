import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import HeaderBar from './components/HeaderBar'
import FooterBar from './components/FooterBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import CurrentClient from './components/CurrentClient'
import PracticeAreas from './components/Practice-Areas';

class App extends Component {
  render() {
    return (
      <div style={{width:"100%",maxHeight:"100%",position:'realtive'}}>
        <div style={{paddingBottom:50,minHeight:'100%'}}>
          <BrowserRouter>
            <React.Fragment>
              <div>
                <HeaderBar/>
              </div>
              <Switch>
                <Route exact path="/" render={(props) => 
                  <Home/>
                }>
                </Route>
                <Route exact path="/about" render={(props) => 
                  <About/>
                }>
                </Route>
                <Route path="/contact" render={(props) => 
                  <Contact/>
                }>
                </Route>
                <Route path="/current-clients" render={(props) => 
                  <CurrentClient/>
                }>
                </Route>
                <Route exact path="/practice-areas/:area?/:crime?" render={(props) => 
                  <PracticeAreas {...props}/>
                }>
                </Route>
              </Switch>
              <div>
                <FooterBar/>
              </div>
            </React.Fragment>   
          </BrowserRouter>
        </div>      
        
      </div>
    );
  }
}

export default App;
