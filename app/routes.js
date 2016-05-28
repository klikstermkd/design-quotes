import Books from './components/Books';
import Posters from './components/Posters';
import Quotes from './components/Quotes';
import App from './components/App';

export default {
  path: '/',
  component: App,
  indexRoute: { component: Quotes },
  childRoutes: [
    { path: '/quotes', component: Quotes },
    { path: '/books', component: Books },
    { path: '/posters', component: Posters }
  ]
};