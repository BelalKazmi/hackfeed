import React from 'react';

const Card = ({ data }) => {
  return (
    <ul>
      {data.map((story, key) => (
        <li id={story.objectID} key={key}>
          {story.title}
        </li>
      ))}
    </ul>
  );
};

export default Card;
