import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import serialize from 'serialize-javascript';

import App from '../src/App';
import Routes from '../src/routes';

const PORT = process.env.PORT || 3005;
const app = express();

app.use(express.static('./build'));

global.stories =[]
global.page = 1;
const tag = 'story';
const timeStamp = { startDate: 1577836800, endDate: 1580515200 };

app.get('/api/:page', async (req, res, next) => {
  try {
    if (global.page === 1) {
      const response = await fetch(`http://hn.algolia.com/api/v1/search_by_date?tags=${tag}&page=${global.page}&numericFilters=created_at_i>${timeStamp.startDate},created_at_i<${timeStamp.endDate}`, {
        method: "GET",
      });
      const data = await response.json()
      global.stories = data.hits;
      global.page += 1;
    }
    if ((parseInt(req.params.page)+1) >= global.page) {
      while ((global.page <= (parseInt(req.params.page)+1))) {
        const response = await fetch(`http://hn.algolia.com/api/v1/search_by_date?tags=${tag}&page=${global.page}&numericFilters=created_at_i>${timeStamp.startDate},created_at_i<${timeStamp.endDate}`, {
          method: "GET",
        });
        const data = await response.json()
        global.stories = [...global.stories, ...data.hits];
        global.page += 1;
      }
    }
    res.send({ data: global.stories.filter((data, key) => ((key >= ((parseInt(req.params.page) - 1) * 20))) && ((key < (parseInt(req.params.page)  * 20)))) })
  } catch (error) {
    return next(error)
  }
})

app.get('/*', (req, res) => {
  const currentRoute = Routes.find(route => matchPath(req.url, route)) || {};
  let promise;

  if (currentRoute.loadData) {
    promise = currentRoute.loadData();
  } else {
    promise = Promise.resolve(null);
  }

  promise.then(data => {
    // Let's add the data to the context
    const context = { data };
    const app = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );

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
          .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
          .replace(
            '</body>',
            `<script>window.__ROUTE_DATA__ = ${serialize(data)}</script></body>`
          )
      );
    });
  });
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});