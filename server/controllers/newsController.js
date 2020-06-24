import express from 'express';
import { getNewsFromApi, getPaginatedStories } from '../services/helper';

let router = express.Router();

router.get('/:page', async(req, res) => {
  const requestedPage = parseInt(req.params.page);
  if (global.page === 1) {
    const data = await getNewsFromApi(global.page);
    global.stories = data.hits;
    global.page += 1;
  }
  if ((requestedPage + 1) >= global.page) {
    while (global.page <= (requestedPage + 1)) {
      const data = await getNewsFromApi(global.page);
      global.stories = [...global.stories, ...data.hits];
      global.page += 1;
    }
  }
  res.send(getPaginatedStories(global.stories, requestedPage));
});

router.post('/hide', async (req, res) => {
  const _id = req.body.objectID;
  global.stories = global.stories.filter((story) => (story.objectID !== _id));
  global.pageCounter += 1;
  if (global.pageCounter === 20) {
    const data = await getNewsFromApi(global.page);
    global.stories = [...global.stories, ...data.hits];
    global.page += 1;
    global.pageCounter = 0;
  }
  res.send('OK')
});

export default router
