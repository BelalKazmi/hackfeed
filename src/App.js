import React, { useReducer } from 'react';
import loadable from 'loadable-components';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import reducer from './reducers';

export const DataContext = React.createContext();

const NotFound = loadable(() => import('./pages/NotFound'));
const Profile = loadable(() => import('./pages/Profile'));
const NewsFeed = loadable(() => import('./pages/NewsFeed'));
const StoryBoard = loadable(() => import('./pages/StoryBoard'));

const initialState = {
  data: {},
};

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:user" component={Profile} />
        <Route exact path="/news/:page" component={NewsFeed} />
        <Route exact path="/news/:page/:story" component={StoryBoard} />
        <Route component={NotFound} />
      </Switch>
    </DataContext.Provider>
  );
};
