import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NewsFeed from './pages/NewsFeed';
import StoryBoard from './pages/StoryBoard';
import NotFound from './pages/NotFound';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile/:user" component={Profile} />
      <Route exact path="/news/:page" component={NewsFeed} />
      <Route exact path="/news/:page/:story" component={StoryBoard} />
      <Route component={NotFound} />
    </Switch>
  );
};
