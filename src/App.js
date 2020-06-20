import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import StoryBoard from './StoryBoard';

export default () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/:page" component={StoryBoard} />
      <Route component={NotFound} />
    </Switch>
  );
};
