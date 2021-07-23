import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Header from "./HeaderComponent";
import HomeVideo from "./HomeVideoComponent"; 
import About from "./AboutComponent";
import MovieDetailComponent from "./MovieDetailComponent";
import VideoPlayer from "./VideoPlayerComponent";
import Events from "./EventsHomeComponent";
import EventDetail from "./EventDetailComponent";
import Gallery from "./GalleryComponent";
import WatchList from "./WatchlistComponent";
import { connect } from "react-redux";
import { fetchGallery, fetchMovieDetails, fetchComments, fetchEvents, postComment } from "../redux/ActionCreators";

const mapStateToProps = state => {
    return{
        galleryData: state.galleryData,
        movieDetail: state.movieDetail,
        eventsData: state.eventsData,
        comments: state.comments
    }
}

const mapDispatchToProps = {
    fetchGallery: () => (fetchGallery()),
    fetchMovieDetail: () => (fetchMovieDetails()),
    fetchComments: () => (fetchComments()),
    fetchEvents: () => (fetchEvents()),
    postComment: (movieId, author, comment) => (postComment(movieId, author, comment))
}

class SwitchComponent extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        this.props.fetchGallery();
        this.props.fetchMovieDetail();
        this.props.fetchComments();
        this.props.fetchEvents();
    }


    render() {
        const movieData = ({match}) => {
            return(
                <MovieDetailComponent movieDetail={this.props.movieDetail.movieDetail.filter(movieD => movieD.id === +match.params.movieId)[0]} />
            );
        };

        const moviePlay = ({match}) => {
            return(
                <VideoPlayer 
                    movieData={this.props.movieDetail.movieDetail.filter(movieD => movieD.videoId === +match.params.videoId)[0]} 
                    comments={this.props.comments.comments.filter(comment => comment.movieId === +match.params.videoId)}
                    postComment={this.props.postComment}
                />
            );
        };

        const eventGo = ({match}) => {
            return(
                <EventDetail eventsData={this.props.eventsData.eventsData.filter(eventD => eventD.id === +match.params.eventId)[0]} />
            );
        };



        return(
            <React.Fragment>
                <Header />
                <Route exact path="/home" component={HomeVideo} />
                <Switch>
                    <Route exact path="/gallery" render={() => <Gallery galleryData={this.props.galleryData} />} />
                    <Route exact path="/gallery/:movieId" component={movieData} />
                    <Route exact path="/gallery/detail/:videoId" component={moviePlay} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/events" render={() => <Events eventsData={this.props.eventsData.eventsData} />} />
                    <Route exact path="/events/:eventId" component={eventGo} />
                    <Route exact path="/watchlist" component={WatchList} />
                    
                </Switch>
                {/* <Footer /> */}
            </React.Fragment>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SwitchComponent));