import * as ActionTypes from "./ActionTypes";

export const eventsData = (state = { isLoading: true, errMess: null, eventsData: [] }, action) => {
    switch(action.type) {
        case ActionTypes.GET_EVENTS: 
            return {...state, isLoading: false, errMess: null, eventsData: action.payload };
        case ActionTypes.EVENTS_LOADING: 
            return {...state, isLoading: true, errMess: null, eventsData: [] };
        case ActionTypes.EVENTS_ERROR:
            return {...state, isLoading: false, errMess: action.payload };
        default:
            return state;
    }
};