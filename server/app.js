
import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import bodyParser from 'body-parser';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { ServerStyleSheets } from '@material-ui/core/styles';
import serialize from 'serialize-javascript';
// import cors from 'cors';

import App from '../src/App';
import Routes from '../src/routes';

import newsController from './controllers/newsController';
// import storyController from './controllers/storyController';
// import profileController from  './controllers/profileController';

const app = express();

/*
Removed Cors , will add later
const whitelist = ['http://hackyfeed.herokuapp.com','https://hackyfeed.herokuapp.com'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions));
*/
app.use(bodyParser.json())
app.use(express.static('./build'));

app.use('/api/news', newsController);
// app.use('/api/story', storyController);
// app.use ('/api/profile', profileController);

global.stories = []
global.page = 1;
global.pageCounter = 0;

app.get('/*', (req, res) => {
  const currentRoute = Routes.find(route => matchPath(req.url, route)) || {};
  let promise;

  if (currentRoute.loadUser) {
    const user = req.url.split('/')[2];
    promise = currentRoute.loadUser(user);
  }
  else if (currentRoute.loadNewsFeed) {
    const page = parseInt(req.url.split('/')[2]);
    promise = currentRoute.loadNewsFeed(page);
  }
  else if (currentRoute.loadStory) {
    const page = req.url.split('/')[2];
    const id = req.url.split('/')[3];
    promise = currentRoute.loadStory(page, id);
  }
  else {
    promise = Promise.resolve(null);
  }

  promise.then(data => {
    // Let's add the data to the context
    const context = { data };
    const sheets = new ServerStyleSheets();
    const app = ReactDOMServer.renderToString(
      sheets.collect(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
      )
    );

    const css = sheets.toString();
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, indexData) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }

      if (context.status === 404) {
        res.status(404);
      }

      if (context.url) {
        return res.redirect(301, context.url);
      }

      return res.send(
        indexData
          .replace(
            '</title>',
            `</title><style id="jss-server-side">${css}</style>`
          )
          .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
          .replace(
            '</body>',
            `<script defer>window.__ROUTE_DATA__ = ${serialize(data)}</script></body>`
          )
      );
    });
  });
});

export default app;