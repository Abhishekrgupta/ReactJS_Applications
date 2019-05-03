import { 
  SIGN_IN,
  SIGN_OUT, 
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM 
} from './types'

import streams from '../api/Streams';
import history from '../history';

export const signIn = (userId) => {
  return{
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return{
    type: SIGN_OUT
  };
}

export const createStream = (formsValue) => {
  return async (dispatch, getState) => {  
    const { userId } = getState().auth
    const response = await streams.post('/streams', { ...formsValue, userId });
    dispatch({
      type: CREATE_STREAM,
      payload:response.data
    });
    history.push('/');
  };
};

export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get('/streams');
    dispatch({
      type: FETCH_STREAMS,
      payload: response.data
    });
  };
};

// export const fetchStreams = () => async dispatch => {
//   const response = await streams.get('/streams');

//   dispatch({ type: FETCH_STREAMS, payload: response.data });
// };

export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get(`/streams/${id}`); 
    dispatch({
      type: FETCH_STREAM,
      payload: response.data
    });
  };
};

//  PUT --> Updates ALL properties of the record

// export const editStream = (id, formsValue) => {
//   return async (dispatch) => {
//     const response = await streams.put(`/streams/${id}`, formsValue);
//     dispatch({
//       type: EDIT_STREAM,
//       payload: response.data
//     });
//     history.push('/');
//   };
// };

//  PATCH --> Updates SOME properties of the record
export const editStream = (id, formsValue) => {
  return async (dispatch) => {
    const response = await streams.patch(`/streams/${id}`, formsValue);
    dispatch({
      type: EDIT_STREAM,
      payload: response.data
    });
    history.push('/');
  };
};

export const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`);
    dispatch({
      type: DELETE_STREAM,
      payload: id
    });
    history.push('/');
  };
};