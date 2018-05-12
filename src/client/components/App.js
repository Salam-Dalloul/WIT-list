import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../containers/homePage';
import SubmitOrg from '../containers/submitOrg';

import './app.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/submit-org' component={SubmitOrg} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
