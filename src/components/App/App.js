import React from 'react';
import Route from 'react-router-dom/Route';
import Helmet from 'react-helmet';
import Switch from 'react-router-dom/Switch';
import uuid from 'uuid';
// internal
import NotFound from '../NotFound';
import routes from '../../routes';

const App = () => (
  <div>
    <Helmet titleTemplate="%s | Deep.Digital" defaultTitle="Deep.Digital">
      <meta charSet="utf-8" />
      <html lang="ru" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      <meta name="application-name" content="Deep.Digital" />
      <meta name="description" content="Советы по Frontend- и Backend-разработке web-сервисов, статьи и презентации от наших разработчиков, анонсы проектов и многое другое." />

      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#fff55f" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#fff55f" />

      <meta property="og:image" content="http://deep.digital/og.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
    <Switch>
      {routes.map(({ component: Component, ...route }) => (
        <Route {...route} key={uuid.v4()} component={({ ...props }) => <Component {...props} />} />
      ))}
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
