import React from 'react'
import HogTile from './HogTile'
import Filters from './Filters'


export default class HogHolder extends React.Component{
  hideHog = (e) => {
       if (!e.target.parentElement.style.display){
          e.target.parentElement.style.display = 'block'
        }
         e.target.parentElement.style.display = 'none'
      }

  // handleGif = () => {
  //   return this.props.hogGifs()
  // }

  render(){
    const hogs = () => {
      if (this.props.filter === 'all'){
        return this.props.hogs
      } else if (this.props.filter === 'greased'){
        return this.props.greased
      } else {
        return this.props.ungreased
      }
    }

    const sortedHogs = () => {
      if(this.props.sort === 'none'){
        return hogs()
      } else if (this.props.sort === 'weight') {
        return hogs().sort((a,b) => {
          return a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
        })
      } else if (this.props.sort === 'name') {
        return hogs().sort((a,b) => {
          let nameA = a.name.toLowerCase()
          let nameB = b.name.toLowerCase()

          if (nameA < nameB){
            return -1
          } else if (nameA > nameB){
            return 1
          } else {
          return 0
          }
        })
      }
    }


    return(
      <div>

        <Filters
          onFilterChange={this.props.onFilterChange}
          filter={this.props.filter}
          onSortChange={this.props.onSortChange}
          sort={this.props.sort}
          />
        <div>
          {sortedHogs().map(h => (
            < HogTile hideHog={this.hideHog} hog={h} />
          ))}
        </div>
      </div>
    )
  }
}
