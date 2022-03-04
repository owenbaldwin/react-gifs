import React, { Component } from 'react';
import Gif from './gif';

// class GifList extends Component {
//   renderList = () => {
//     return this.props.gifs.map(gif => {
//       return <Gif id={gif.id} key={gif.id} />
//     })
//   }
//   render() {
//     return (
//       <div className="gif-list">
//         {props.gifs.map(gif => <Gif id={gif} key={gif} selectGif={props.selectGif} />)}
//       </div>
//     );
//   }
// }

const GifList = (props) => {
  return (
      <div className="gif-list">
        {props.gifs.map(gif => <Gif id={gif} key={gif} selectGif={props.selectGif} />)}
      </div>
  );
};

export default GifList;
// { this.renderList() }
