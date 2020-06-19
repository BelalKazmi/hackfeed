import loadData from './helpers/loadData';
import Home from './Home';
import NotFound from './NotFound';
import StoryBoard from './StoryBoard';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/:page',
    component: StoryBoard,
    loadData: (page) => loadData(page)
  },
  {
    component: NotFound
  }
];

export default Routes;