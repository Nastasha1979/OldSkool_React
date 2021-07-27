import * as ActionTypes from "./ActionTypes";

export const reviews = (state = { isLoading: true, errMess: null, reviews: [] }, action) => {
    switch(action.type) {
        case ActionTypes.GET_REVIEWS: 
            return {...state, isLoading: false, errMess: null, reviews: action.payload };
        case ActionTypes.REVIEWS_LOADING: 
            return {...state, isLoading: true, errMess: null, reviews: [] };
        case ActionTypes.REVIEWS_ERROR:
            return {...state, isLoading: false, errMess: action.payload };
        case ActionTypes.ADD_REVIEWS: 
            const review = action.payload;
            review.id = state.reviews.length;
            return{...state, reviews: state.reviews.concat(review)};
        default:
            return state;
    }
};