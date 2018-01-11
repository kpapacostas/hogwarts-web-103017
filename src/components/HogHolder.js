import React from 'react'
import HogTile from './HogTile'


export default class HogHolder extends React.Component{

  render(){
    const {hogs} = this.props
    console.log('hog holder', hogs);

    return(
      < HogTile hog={hogs[3]} />
    )
  }
}
