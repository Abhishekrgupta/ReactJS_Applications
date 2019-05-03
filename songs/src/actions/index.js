//ACTION CREATOR
export const  selectSong = (song) => {
  
  // RETURN AN JSON OBJECT OF ACTION
  return {
    type: 'SELECTED_SONG',
    payload : song
  };
};  