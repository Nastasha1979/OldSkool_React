import * as ActionTypes from "./ActionTypes";

export const users = (state = { errMess: false, users: [] }, action) => {
    switch(action.type) {
        case ActionTypes.GET_USERS: 
            return {...state, errMess: false, users: action.payload };
        case ActionTypes.USER_ERROR: 
            return {...state, errMess: action.payload };
        default:
            return state;
    }
};