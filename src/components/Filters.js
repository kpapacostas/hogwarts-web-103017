import React from 'react'

class Filters extends React.Component {
  onGreaseChange = (e) => {
    this.props.onFilterChange(e.target.value)
  }

  onSortChange = (e) => {
    this.props.onSortChange(e.target.value)
  }

  render(){
    return (
      <div>
        <p>What Hogs you wanna holler at?</p>
        <select onChange={this.onGreaseChange} value={this.props.filter}>
          <option value="all">All</option>
          <option value="greased">Greased</option>
          <option value="ungreased">Ungreased</option>
        </select>
        <p>How do you like your hogs sorted?</p>
        <select onChange={this.onSortChange} value={this.props.sort}>
          <option value="none">None</option>
          <option value="weight">Weight</option>
          <option value="name">Name</option>
        </select>

      </div>
    )
  }
}

export default Filters
