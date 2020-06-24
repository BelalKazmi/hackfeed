import 'isomorphic-fetch';

export default (id) => {
  return fetch(`https://hackyfeed.herokuapp.com/api/news/hide`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ objectID: id }),
  }).then((res) => {
    return res;
  });
};
