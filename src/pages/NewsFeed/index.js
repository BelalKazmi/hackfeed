import React, { useState, useEffect } from 'react';
import loadNewsFeed from '../../helpers/loadNewsFeed';
// import Card from '../../components/Card';

const NewsFeed = (props) => {
  const [data, setData] = useState([]);
  if (props.staticContext && props.staticContext.data) {
    setData(props.staticContext.data);
  }

  useEffect(() => {
    setTimeout(() => {
      if (window.__ROUTE_DATA__) {
        setData(window.__ROUTE_DATA__);
        delete window.__ROUTE_DATA__;
      } else {
        loadNewsFeed(props.match.params.page).then((res) => {
          setData(res);
        });
      }
    }, 0);
  }, [props.match.params.page]);

  return (
    // <Card {...data}/>
    <ul>
      {data.map((story, key) => (
        <li id={story.objectID} key={key}>
          {story.title}
        </li>
      ))}
    </ul>
  );
};

export default NewsFeed;
