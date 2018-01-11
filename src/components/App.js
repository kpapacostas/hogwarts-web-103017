import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data'
import HogHolder from './HogHolder'
// console.log(hogs);
class App extends Component {
  constructor(props){
    super(props)

    this.state={
      hogs,
      greased: hogs.filter(h => h.greased),
      ungreased: hogs.filter(h => !h.greased),
      filters: {
        type: 'all'
      }
    }
  }

  handleGreaseFilterChange = (updatedType) => {
    const newType = { type: updatedType }

    this.setState({filters: newType})
  }

  // switch (this.state.filters.type){
  //   case 'all':
  //     this.setState
  // }

  render() {
    console.log(this.state.filters.type);
    return (
      <div className="App">
          < Nav />
          < HogHolder
          greased={this.state.greased}
          ungreased={this.state.ungreased}
          filter={this.state.filters.type}
          onFilterChange={this.handleGreaseFilterChange}
          hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
