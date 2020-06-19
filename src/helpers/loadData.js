import 'isomorphic-fetch';

export default pageNumber => {
  console.log('The routes--',pageNumber);
  return fetch(`http://localhost:3005/api/story/${pageNumber}`)
    .then(res => {
      return res.json()
    });
};