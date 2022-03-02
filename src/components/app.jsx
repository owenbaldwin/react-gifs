import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  render() {
    const gifs = [
      { id: "hy1iR1Yqqnk8JJ5kPb" },
      { id: "g96QRNjWUvdKw" }
    ]

    return (

      <div>
        <div className="left-scene">
          < SearchBar />
          <div className="selected-gif">
            < Gif id="hy1iR1Yqqnk8JJ5kPb"/>
          </div>
        </div>
        <div className="reight-scene">
          < GifList gifs={gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
