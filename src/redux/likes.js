import * as ActionTypes from "./ActionTypes";

export const likes = (state = {likes: []}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_LIKE: 
            const index = state.likes.indexOf(like => like.videoId === action.payload)[0];
            const myObj = state.likes.filter(like => like.videoId === action.payload)[0];
            myObj.likes = myObj.likes + 1;
            
            return { ...state, likes: likes.splice(index, 0, myObj)}
        case ActionTypes.DELETE_LIKE:
            const index1 = state.likes.indexOf(like => like.videoId === action.payload)[0];
            const myObj1 = state.likes.filter(like => like.videoId === action.payload)[0];
            myObj1.likes = myObj1.likes - 1;
            
            return { ...state, likes: likes.splice(index1, 0, myObj1)}
        default: 
            return state;
    }
};

