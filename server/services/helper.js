import constants from '../config/constants';

const getStoryFromApi = async (page, tag = 'story') => {
    const { apiUrl, timeStamp } = constants;
    const response = await fetch(`${apiUrl}search_by_date?tags=${tag}&page=${page}&numericFilters=created_at_i>${timeStamp.startDate},created_at_i<${timeStamp.endDate}`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
}

const getPaginatedStories = (stories, pageRequested) => stories.filter((data, key) => ((key >= ((pageRequested - 1) * 20))) && ((key < pageRequested * 20)));

export {getStoryFromApi,getPaginatedStories}