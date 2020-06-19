import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import StoryBoard from './StoryBoard';
import NotFound from './NotFound';

export default props => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/1">Story</NavLink>
        </li>
      </ul>

      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home name="Belal Ali Kazmi" {...props} />}
        />
        <Route path="/:page" component={StoryBoard} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};