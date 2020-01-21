import React from 'react';
import logo from './logo.svg';
import './App.css';
//components
import MainContainer from './components/mainContainer'
import LoginContainer from './components/LoginContainer'
//styling
import { createGlobalStyle } from 'styled-components';
//routing
import { Route, Switch } from 'react-router'

class App extends React.Component {
  
  render() {
    const GlobalStyle = createGlobalStyle`

      body {
        background: #FFFFFF;
        color: #fff;
      }`;


    return (
      <div className="App">
        <GlobalStyle />
        <Switch>
          <Route path="/users/hope" render={() => <MainContainer />} />
          <Route path="/login" render={() => <LoginContainer />} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
