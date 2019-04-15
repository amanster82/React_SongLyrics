import React, { Component } from "react";
import css from "./App.css";
import animation from "./animate.css";
import SongLyrics from "./SongLyrics";
import SongName from "./SongName";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const style = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  },

  searching: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
    transition: "height 2s"
  },

};

class App extends Component {
  constructor(props) {
    super(props);
    global.i = 0;
    this.state = {

      style1: { 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        height: "100vh", 
        width: "100%", 
        transition: "height 2s" 
      },

      style2: {
        animationDelay: "3s",
        transition: "display 2s"
      },

      listOfSongs: [
        {
          id: 0,
          name: "Everybody",
          artist: "Backstreet Boys",
          rating: "4 stars"
        },
        { id: 1, name: "Gangnam Style", artist: "PSY", rating: "5 stars" },
        {
          id: 2,
          name: "Hit me baby one more time",
          artist: "Britney Spears",
          rating: "3 stars"
        },
        { id: 3, name: "Shallow", artist: "Lady Gaga", rating: "5 stars" },
        { id: 4, name: "Madness", artist: "Muse", rating: "5 stars" }
      ],

      searchingState: [
        { animation: "animated fadeIn" },
        { animation: "animated zoomOutDown" }
      ],

      userSearch: false
    };
  }

  callMe = e => {
    console.log("hey you");
    console.log(e.target.value);
    if (e.keyCode === 13) {
      console.log("mmaaadee it");
      console.log(e.target.value);
      if (e.target.value === this.state.listOfSongs[0].name) {
        console.log("its a match");
        var newarr = this.state.listOfSongs;
        newarr[0].name = "the chosen one";
        this.setState({ listOfSongs: newarr });
        global.i = 1;

        setTimeout(
          function() {
              this.setState({userSearch: true});
          }
          .bind(this),
          1000
        );

        setTimeout(
          function() {
            var heightProp = {height: 0}
            var changedStyle = { ...this.state.style1, height: 300}; /// ... clones everything and append more stuff
            this.setState({style1: changedStyle});
          }
          .bind(this),
          2000
        );

        // setTimeout(
        //   function() {
        //     var changedStyle = { ...this.state.style2, display: "contents"}; /// ... clones everything and append more stuff
        //     this.setState({style2: changedStyle});
        //   }
        //   .bind(this),
        //   5000
        // );


      }
    }
  };

  render() {
    return (
      <div className="searching" style={this.state.style1}>
        
        {!this.state.userSearch ?

        <Paper
          style={style.root}
          elevation={1}
          className={this.state.searchingState[global.i].animation}
        >
          <InputBase
            style={style.input}
            placeholder="Search Lyrics"
            onKeyDown={this.callMe}
          />
          <IconButton className="iconButton" aria-label="Search" onClick={this.callMe}>
            <SearchIcon />
          </IconButton>
        </Paper>
        // {/* <SongLyrics listOfSongs={this.state.listOfSongs} /> */}
        
      : <div className="animated fadeIn">
          <SongName songName={this.state.listOfSongs[0].name}/>

          <div className="animated fadeIn" style={this.state.style2}><SongLyrics listOfSongs={this.state.listOfSongs}/></div>

        </div>
    }

        
      </div>
    );
  }
}

export default App;
