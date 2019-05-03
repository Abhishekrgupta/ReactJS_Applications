import './SeasonDisplay.css';
import React from "react";

const seasonConfig ={
  Summer : {
    text: 'Its Summer',
    iconName: 'sun'
  },
  Winter : {
    text: 'Its Winter',
    iconName: 'snowflake'
  }
}

const getSeason = ( lat, month) => {
  if(month>2 && month< 9){
    return lat > 0 ? 'Summer' : 'Winter'
  } else {
    return lat > 0 ? 'Winter' : 'Summer'
  }
}
const SeasonDisplay  = (props) => {
  const season  = getSeason(props.lat, new Date().getMonth());
  //console.log(season);
  // const text = season === 'Winter' ? 'Its Winter' : ''
  // const icon = season === 'Winter' ? 'snowflake' : 'sun'

  const {iconName, text} = seasonConfig[season];

  return (
    <div className= {`season-display ${season}`}> 
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
    
  )
}

export default SeasonDisplay;