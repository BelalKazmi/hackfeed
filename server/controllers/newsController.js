import express from 'express';
import { getStoryFromApi, getPaginatedStories } from '../services/helper';

let router = express.Router();

router.get('/:page', async(req, res) => {
  const requestedPage = parseInt(req.params.page);
  if (global.page === 1) {
    const data = await getStoryFromApi(global.page);
    global.stories = data.hits;
    global.page += 1;
  }
  if ((requestedPage + 1) >= global.page) {
    while (global.page <= (requestedPage + 1)) {
      const data = await getStoryFromApi(global.page);
      global.stories = data.hits;
      global.stories = [...global.stories, ...data.hits];
      global.page += 1;
    }
  }
  res.send(getPaginatedStories(global.stories, requestedPage));
});

export default router
