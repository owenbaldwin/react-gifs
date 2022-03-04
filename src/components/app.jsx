import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = 'Jq8pCwgWoOLhbegl2zUh4obJfdKTEDL7';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "g96QRNjWUvdKw"
    };

    // this.search('homer thinking');
    this.search = this.search.bind(this);
    this.selectGif = this.selectGif.bind(this);
  }

  // search = (query) => {
  //   giphy('Jq8pCwgWoOLhbegl2zUh4obJfdKTEDL7').search({
  //     q: query,
  //     rating: 'g',
  //     limit: 10
  //   }, (error, result) => {
  //     this.setState({
  //       gifs: result.data
  //     });
  //   });
  // }

  selectGif(id) {
    this.setState({
      selectedGifId: id
    });
  }

  search(query) {
    const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10`
    fetch(giphEndpoint).then(response => response.json()).then((data) => {
      const gifs = data.data.map(giph => giph.id);
      this.setState({
        gifs: gifs
      });
    });
  }

  render() {
    // const gifs = [
    //   { id: "hy1iR1Yqqnk8JJ5kPb" },
    //   { id: "g96QRNjWUvdKw" }
    // ]

    return (

      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="reight-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;

// 1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm
