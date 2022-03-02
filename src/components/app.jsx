import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';


class App extends Component {

  render() {
    return (

      <div>
        <div className="left-scene">
          < SearchBar />
          <div className="selected-gif">
            < Gif id="hy1iR1Yqqnk8JJ5kPb"/>
          </div>
        </div>
        <div className="reight-scene">
        </div>
      </div>
    );
  }
}

export default App;
