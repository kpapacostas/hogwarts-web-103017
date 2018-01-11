import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data'
import HogHolder from './HogHolder'
import hogGifs from '../hog_gifs'
// console.log(hogs);
class App extends Component {
  constructor(props){
    super(props)

    this.state={
      hogs,
      greased: hogs.filter(h => h.greased),
      ungreased: hogs.filter(h => !h.greased),
      randGifUrl: "",
      filters: {
        type: 'all'
      },
      sort: {
        type: 'none'
      }
    }
  }

  handleGreaseFilterChange = (updatedType) => {
    const newType = { type: updatedType }

    this.setState({filters: newType})
  }

  handleSortChange = (sortType) => {
    const newType = {type: sortType}

    this.setState({sort: newType})
  }

  componentDidMount() {
    hogGifs().then(json => this.setState({
      randGifUrl: json.data.image_url
    }))
  }



  render() {
    console.log(hogGifs);
    console.log(this.state.randGifUrl);
    return (
      <div className="App">
          < Nav />
          < HogHolder
          hogGifs={hogGifs}
          greased={this.state.greased}
          ungreased={this.state.ungreased}
          filter={this.state.filters.type}
          sort={this.state.sort.type}
          onSortChange={this.handleSortChange}
          onFilterChange={this.handleGreaseFilterChange}
          hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
