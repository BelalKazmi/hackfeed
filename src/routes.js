import loadData from './helpers/loadData';
import Home from './Home';
import NotFound from './NotFound';
import Todos from './Todos';


const Routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/todos',
    component: Todos,
    loadData: () => loadData('todos')
  },
  {
    component: NotFound
  }
];

export default Routes;