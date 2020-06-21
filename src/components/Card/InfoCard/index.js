import React from 'react';

const InfoCard = ({ title, url, tag }) => (
  <div>
    <h3>{title}</h3>
    <h3>{url}</h3>
    <h3>{tag}</h3>
  </div>
);

export default InfoCard;
