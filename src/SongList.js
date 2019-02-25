import React from 'react';


function SongList (props) {

    return (
        <ol>
        {props.listOfSongs.map((song) => <li onClick={() =>{ return song.name + "by" + "artist:" + song.artist  }}>{song.name}</li>)}
        </ol>
        );
}

export default SongList;