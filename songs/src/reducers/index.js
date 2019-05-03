import { combineReducers } from 'redux';

const songListReducer = () =>{
  return [
    { title: 'ABC', duration:'3:45'},
    { title: 'DEF', duration:'2:30'},
    { title: 'HIJ', duration:'2:50'},
    { title: 'KLM', duration:'4:45'}
  ];
};

const songSelectedReducer = (selectedSong = null , action) =>{

  if (action.type === 'SELECTED_SONG') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs : songListReducer,
  selectedSong: songSelectedReducer
});