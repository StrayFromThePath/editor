// import universal from 'react-universal-component';
// import Home from './scenes/Home';
// import Loader from './components/Loader';
// import NotFound from './components/NotFound';
import TabsArticle from './scenes/React/Tabs';

// const Tools = universal(() => import('./scenes/Tools'), {
//   minDelay: 1200,
//   loading: Loader,
//   error: NotFound,
// });

export default [
  {
    path: '/react/tabs',
    exact: true,
    component: TabsArticle,
  },
];
