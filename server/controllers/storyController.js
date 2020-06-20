import express from 'express';
import { getStoryFromApi, getPaginatedStories } from '../services/helper';

let router = express.Router();

router.post('/hide/:page/:objectID', (req, res) => {
    const _id = req.params.objectID;
    const requestedPage = parseInt(req.params.page);
    global.stories = global.stories.filter((story) => (story.objectID !== _id));
    global.pageCounter += 1;
    if (global.pageCounter === 20) {
      const data = getStoryFromApi(global.page);
      global.stories = [...global.stories, ...data.hits];
      global.page += 1;
      global.pageCounter = 0;
    }
    res.send(getPaginatedStories(global.stories, requestedPage))
});

export default router;