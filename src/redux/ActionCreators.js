import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

//Gallery Films
export const fetchGallery = () => dispatch => {

    dispatch(galleryLoading());

    return fetch(baseUrl + "galleryData")
        .then(response => {
            if(response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(gallery => dispatch(addGallery(gallery)))
        .catch(error => dispatch(galleryFailed(error.message)));
};

export const galleryLoading = () => ({
    type: ActionTypes.FILMS_LOADING
});

export const galleryFailed = errMess => ({
    type: ActionTypes.FILMS_ERROR,
    payload: errMess
});

export const addGallery = gallery => ({
    type: ActionTypes.GET_FILMS,
    payload: gallery
});


//Movie Details

export const fetchMovieDetails = () => dispatch => {

    dispatch(filmDetailsLoading());

    return fetch(baseUrl + "movieDetail")
        .then(response => {
            if(response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(details => dispatch(addMovieDetails(details)))
        .catch(error => dispatch(filmDetailsFailed(error.message)));
};

export const filmDetailsLoading = () => ({
    type: ActionTypes.FILMS_DETAILS_LOADING
});

export const filmDetailsFailed = errMess => ({
    type: ActionTypes.FILMS_DETAILS_ERROR,
    payload: errMess
});

export const addMovieDetails = details => ({
    type: ActionTypes.GET_FILM_DETAILS,
    payload: details
});

//movie comments

export const fetchComments = () => dispatch => {

    dispatch(commentsLoading());

    return fetch(baseUrl + "comments")
        .then(response => {
            if(response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsLoading = () => ({
    type: ActionTypes.COMMENTS_LOADING
});

export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_ERROR,
    payload: errMess
});

export const addComments = comments => ({
    type: ActionTypes.GET_COMMENTS,
    payload: comments
});


//Events

export const fetchEvents = () => dispatch => {

    dispatch(eventsLoading());

    return fetch(baseUrl + "eventsData")
        .then(response => {
            if(response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(events => dispatch(addEvents(events)))
        .catch(error => dispatch(eventsFailed(error.message)));
};

export const eventsLoading = () => ({
    type: ActionTypes.EVENTS_LOADING
});

export const eventsFailed = errMess => ({
    type: ActionTypes.EVENTS_ERROR,
    payload: errMess
});

export const addEvents = events => ({
    type: ActionTypes.GET_EVENTS,
    payload: events
});