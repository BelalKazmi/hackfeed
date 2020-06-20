import 'isomorphic-fetch';

export default (pageNumber) => {
  return fetch(`http://localhost:3005/api/news/${pageNumber}`).then((res) => {
    return res.json();
  });
};
