import React from 'react';
import logo from './logo.svg';
import './App.css';
//components
import MainContainer from './components/mainContainer'
import LoginContainer from './components/LoginContainer'
import SettingsComp from './components/SettingsComp'
//styling
import { GlobalStyle } from './Styled'
import { BodyColor } from './Styled'
//routing
import { Route, Switch } from 'react-router'

class App extends React.Component {
  
  render() {
    
    return (
      <div className="App">
          <Switch>
            <Route path="/users/hope/settings" render={() =><SettingsComp />} />
            <Route path="/users/hope" render={() =><MainContainer />} />
            <Route path="/login" render={() => <LoginContainer />} />
          </Switch>
      </div>
    );
  }
  
}

export default App;
