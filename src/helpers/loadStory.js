import 'isomorphic-fetch';

export default (pageNumber) => {
  return fetch(`https://hackyfeed.herokuapp.com/api/story/${pageNumber}`).then(
    (res) => {
      return res.json();
    }
  );
};
