import Home from './pages/Home';
import Profile from './pages/Profile';
import NewsFeed from './pages/NewsFeed';
import StoryBoard from './pages/StoryBoard';
import NotFound from './pages/NotFound';
import { loadUser, loadNewsFeed, loadStory } from './helpers';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/profile/:user',
    exact: true,
    component: Profile,
    loadUser: (user) => loadUser(user),
  },
  {
    path: '/news/:page',
    exact: true,
    component: NewsFeed,
    loadNewsFeed: (page) => loadNewsFeed(page),
  },
  {
    path: '/news/:page/:story',
    exact: true,
    component: StoryBoard,
    loadStory: (page, story) => loadStory(page, story),
  },
  {
    component: NotFound,
  },
];

export default Routes;
