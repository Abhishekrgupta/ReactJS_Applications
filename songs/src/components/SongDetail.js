import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ( { song } ) => {
  //console.log(props);
  if (!song) {
    return <h5>Please Select a song</h5>
  }
  return (
    <div>
      <h3>Details For</h3>
      <p>
        Title: {song.title}
      </p>
      <p>
        Duration: {song.duration}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {song : state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);