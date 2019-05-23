import React from "react";
import "./css/style.css";

import Card from "./locationCard";
const Locations = ({ locations }) => {
  const location = locations.map(location => {
    return <Card key={location.id} location={location} />;
  });

  return <div className="ui three stackable cards">{location}</div>;
};
export default Locations;
