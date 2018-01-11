import React from 'react'

class Filters extends React.Component {
  onGreaseChange = (e) => {
    this.props.onFilterChange(e.target.value)
  }

  render(){
    return (
      <div>
        <select onChange={this.onGreaseChange} value={this.props.filter}>
          <option value="all">All</option>
          <option value="greased">Greased</option>
          <option value="ungreased">Ungreased</option>
        </select>
      </div>
    )
  }
}

export default Filters
