import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import StoryBoard from './StoryBoard';
import NotFound from './NotFound';

export default props => {
  return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home name="Belal Ali Kazmi" {...props} />}
        />
        <Route path="/:page" component={StoryBoard} />
        <Route component={NotFound} />
      </Switch>
  );
};