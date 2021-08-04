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


export const postComment = (movieId, author, comment) => dispatch => {

    const newComment = {
        movieId: movieId,
        author: author,
        comment: comment,
        date: new Date().toISOString(),
        avatar: "/assets/genericUser.png"
    };
    

    return fetch(baseUrl + "comments", {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if(response.ok){
            return response;
        }else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {
        console.log("Post Comment", error.message);
        alert("Your comment could not be posted\nError: " + error.message);
    })
};

export const addComment = comment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
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





export const postWatchlist = videoId => dispatch => {
    console.log(`posting ${videoId}.`);
    dispatch(addWatchlist(videoId));
};

export const addWatchlist = videoId => ({
    type: ActionTypes.ADD_WATCHLIST,
    payload: videoId
});

export const deleteWatchlist = videoId => ({
    type: ActionTypes.DELETE_WATCHLIST,
    payload: videoId
});




//REVIEWS

export const fetchReviews = () => dispatch => {

    dispatch(reviewsLoading());

    return fetch(baseUrl + "reviews")
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
        .then(reviews => dispatch(addReviews(reviews)))
        .catch(error => dispatch(reviewsFailed(error.message)));
};

export const reviewsLoading = () => ({
    type: ActionTypes.REVIEWS_LOADING
});

export const reviewsFailed = errMess => ({
    type: ActionTypes.REVIEWS_ERROR,
    payload: errMess
});

export const addReviews = reviews => ({
    type: ActionTypes.GET_REVIEWS,
    payload: reviews
});


export const postReviews = (movieId, author, review, rating) => dispatch => {

    const newReview = {
        movieId: movieId,
        author: author,
        review: review,
        rating: rating,
        date: new Date().toISOString(),
        avatar: "/assets/genericUser.png"
    };
    

    return fetch(baseUrl + "reviews", {
        method: "POST",
        body: JSON.stringify(newReview),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if(response.ok){
            return response;
        }else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(review => dispatch(addReview(review)))
    .catch(error => {
        console.log("Post Review", error.message);
        alert("Your review could not be posted\nError: " + error.message);
    });
};

export const addReview = review => ({
    type: ActionTypes.ADD_REVIEWS,
    payload: review
});

export const postContact = (name, email, message) => dispatch => {

    const newContact = {
        name: name,
        email: email,
        message: message,
        date: new Date().toISOString()
    };
    

    return fetch(baseUrl + "contact", {
        method: "POST",
        body: JSON.stringify(newContact),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if(response.ok){
            return response;
        }else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(newContact => dispatch(addContact(newContact)))
    .catch(error => {
        console.log("Post Review", error.message);
        alert("Your review could not be posted\nError: " + error.message);
    });
};

export const addContact = newContact => ({
    type: ActionTypes.POST_CONTACT,
    payload: newContact
});

