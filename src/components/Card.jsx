import React from 'react';

const Card = ({ title, description, image, link }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-link">
        <a href={link}>Website</a>
      </div>
    </div>
  );
};

export default Card;
