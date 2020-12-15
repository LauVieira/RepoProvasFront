import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

export default function App() {
  return (
    <Router>
      <UserContextProvider>
        <Switch>
          <Route path='/' component={LandingPage} />
        </Switch>
      </UserContextProvider>
    </Router>
  );
}