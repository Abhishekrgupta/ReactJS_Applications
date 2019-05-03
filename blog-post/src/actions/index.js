import _ from 'lodash';
import JsonPlaceholder from "../api/JsonPlaceholder";

export const fetchPostsAndUsers = () =>{
 return async (dispatch, getState)=>{
    await dispatch(fetchPosts());

    // const userIds = _.uniq(_.map(getState().posts,'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)))

    //ALTERNATE METHOD OF CHAINING FOR ABOVE CODE COMMENTED
    _.chain(getState().posts)
      .map('userId')
      .uniq()
      .forEach(id => dispatch(fetchUser(id)))
      .value();
  }
} 

export const fetchPosts = () => {

  //REDUX THUNK IS USED TO RETURN A FUNCTION WHEN IT IS ASYNC/AWAIT ARE USED
  return async(dispatch, getState) => {
    const response = await JsonPlaceholder.get('/posts');
    // return{
    //   type: 'FETCH_POSTS',
    //   payload: promise
    // };

    //IT IS USED TO MANULLY DISPATCH THE FUNCTION ,
    // IF WE ARE NOT USING THE GETSTATE(), IT IS OKAY TO REMOVE IT FROM THE ARGUMENT
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
      })
  }
};


export const fetchUser = (id) => {
  return async (dispatch) => { 
    const response = await JsonPlaceholder.get(`/users/${id}`);
    dispatch({
      type:'FETCH_USER',
      payload:response.data
    })
  }
};

// WITH MEMOIZE FUNCTION TO SOLVE OVERFETCHING PROBLEM
// export const fetchUser = (id) => {
//     return async (dispatch) => { 
//       _fetchUser(id, dispatch);
//     }
//   };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await JsonPlaceholder.get(`/users/${id}`);
//       dispatch({
//         type:'FETCH_USER',
//         payload:response.data
//       });
// });