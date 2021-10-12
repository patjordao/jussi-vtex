import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';

import './styles/index.scss';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
}

export default App;
