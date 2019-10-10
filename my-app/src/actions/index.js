import axios from 'axios'

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchDogs = () => dispatch => {
    dispatch({ type: START_FETCHING });
    // do some async action and dispatch an error or success action
    axios
      .get(
        'https://dog.ceo/api/breeds/image/random'
      )
      .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data.message }))
      .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
  };
  