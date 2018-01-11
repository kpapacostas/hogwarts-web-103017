import React from 'react'


const HogTile = (props) => {
  let snake = require('to-snake-case')

  const {name, specialty, greased} = props.hog
  const highestMedalAchieved = props.hog["highest medal achieved"]
  const weight = props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
  const img = require(`../hog-imgs/${snake(name.toLowerCase())}.jpg`)
  const divStyle = {
    backgroundColor: '#DCDCDC',
    border: '3px solid white'
  };

  return(
    <div style={divStyle}>
      <img src={img}></img>
      <h1>This is {name}</h1>
      <h2>Specialty: {specialty}</h2>
      <h3>Greased: {greased ? 'yes' : 'no'}</h3>
      <h3>Highest Medal: {highestMedalAchieved}</h3>
      <h3>Weight: {weight}</h3>
    </div>
  )
}

export default HogTile;
