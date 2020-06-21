import 'isomorphic-fetch';

export default (pageNumber) => {
  return fetch(`https://hackyfeed.herokuapp.com/api/news/${pageNumber}`).then(
    (res) => {
      return res.json();
    }
  );
};
