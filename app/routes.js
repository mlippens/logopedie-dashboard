import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import AgeCalculatorPage from './containers/AgeCalculatorPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/age_calculator" component={AgeCalculatorPage} />
  </Route>
);
