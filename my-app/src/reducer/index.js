import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
    randomDog:[],
    isFetching: false,
    error:''
}

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case START_FETCHING:
            console.log(state)
          return {
            ...state,
            isFetching: true,
            error: ''
          };
        case FETCH_SUCCESS:
                console.log('hello',state)
          return {
            ...state,
            isFetching: false,
            error: '',
            randomDog: [...state.randomDog,action.payload]
          };
        case FETCH_FAILURE:
                console.log(state)
          return {
            ...state,
            error: action.payload,
            isFetching: false
          };
        default:
          return state;
      }

}
export default reducer