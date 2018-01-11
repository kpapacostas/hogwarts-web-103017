import React from 'react'
import HogTile from './HogTile'
import Filters from './Filters'


export default class HogHolder extends React.Component{

  render(){
    const {hogs} = this.props

    return(
      <div>
        <Filters
          onFilterChange={this.props.onFilterChange}
          filter={this.props.filter}
          />
        <div>
          {hogs.map(h => (
            < HogTile hog={h} />
          ))}
        </div>
      </div>
    )
  }
}
