import * as ActionTypes from "./ActionTypes";

export const movieDetail = (state = { isLoading: false, errMess: null, movieDetail: [] }, action) => {
    switch(action.type) {
        case ActionTypes.GET_FILM_DETAILS: 
            return {...state, isLoading: false, errMess: null, movieDetail: action.payload };
        case ActionTypes.FILMS_DETAILS_LOADING: 
            return {...state, isLoading: true, errMess: null, movieDetail: [] };
        case ActionTypes.FILMS_DETAILS_ERROR:
            return {...state, isLoading: false, errMess: action.payload };
        default:
            return state;
    }
};