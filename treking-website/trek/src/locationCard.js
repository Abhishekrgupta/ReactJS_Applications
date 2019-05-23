import React from "react";

const Card = ({ location }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={location.image} alt="acs" />
      </div>
      <div className="content">
        <div className="header">{location.title}</div>
        <div className="description">{location.description}</div>
      </div>
      <a href={location.more_info} className="ui yellow button">
        Read More
      </a>
    </div>
  );
};
export default Card;
