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
      greased: [],
      filters: {
        type: 'all'
      }
    }
  }

  // componentDidMount() {
  //   this.setState({ hogs });
  // }

  render() {
    return (
      <div className="App">
          < Nav />
          < HogHolder hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
