import React, { useReducer, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Loader from './pages/Loader';
import reducer from './reducers';

export const DataContext = React.createContext();

const load = (Component) => (props) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

const NotFound = load(lazy(() => import('./pages/NotFound')));
const Profile = load(lazy(() => import('./pages/Profile')));
const NewsFeed = load(lazy(() => import('./pages/NewsFeed')));
const StoryBoard = load(lazy(() => import('./pages/StoryBoard')));

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
