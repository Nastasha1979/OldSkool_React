import * as ActionTypes from "./ActionTypes";

export const watchlist = (state = [], action) => {
    switch(action.type) {
        case ActionTypes.ADD_WATCHLIST: 
            if(state.includes(action.payload)){
                return state;
            }
            return state.concat(action.payload);
        case ActionTypes.DELETE_WATCHLIST:
            return state.filter(watchlist => watchlist !== action.payload);
        default: 
            return state;
    }
};