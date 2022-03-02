import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media4.giphy.com/media/${this.props.id}/200w.gif`;
    return (
      < img src ={src} alt="" className="gif" />
    );
  }
}

export default Gif;
// https://media4.giphy.com/media/hy1iR1Yqqnk8JJ5kPb/200w.gif?cid=ecf05e47naztqwcssevz5faacfsjytbh20ufjm4k45s8iw37&rid=200w.gif
