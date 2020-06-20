import 'isomorphic-fetch';

export default (pageNumber) => {
  return fetch(`http://localhost:3005/api/story/${pageNumber}`).then((res) => {
    return res.json();
  });
};
