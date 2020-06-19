import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Todos from './Todos';
import NotFound from './NotFound';

export default props => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todos">Todos</NavLink>
        </li>
      </ul>

      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home name="Belal Ali Kazmi" {...props} />}
        />
        <Route path="/todos" component={Todos} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};