import React, { Component } from 'react';
import SongList from './SongList';
import SongPreview from './SongPreview';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listOfSongs: [
        {id: 0, name:"Everybody", artist: "Backstreet Boys", rating: "4 stars"},
        {id: 1, name:"Gangnam Style", artist: "PSY", rating: "5 stars"},
        {id: 2, name:"Hit me baby one more time", artist: "Britney Spears", rating: "3 stars"},
        {id: 3, name:"Shallow", artist: "Lady Gaga", rating: "5 stars"},
        {id: 4, name:"Madness", artist: "Muse", rating: "5 stars"},
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Song List</h1>
         <SongList listOfSongs={this.state.listOfSongs} onClick={() => alert("HEY YOU")} />
        <h1>Song Preview</h1>
        <SongPreview/>
      </div>
    );
  }
}

export default App;

