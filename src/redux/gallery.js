import * as ActionTypes from "./ActionTypes";

export const galleryData = (state = { isLoading: true, errMess: null, galleryData: [] }, action) => {
    switch(action.type) {
        case ActionTypes.GET_FILMS: 
            return {...state, isLoading: false, errMess: null, galleryData: action.payload };
        case ActionTypes.FILMS_LOADING: 
            return {...state, isLoading: true, errMess: null, galleryData: [] };
        case ActionTypes.FILMS_ERROR:
            return {...state, isLoading: false, errMess: action.payload };
        default:
            return state;
    }
};