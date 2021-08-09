import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import HomeVideo from "./HomeVideoComponent"; 
import About from "./AboutComponent";
import MovieDetailComponent from "./MovieDetailComponent";
import VideoPlayer from "./VideoPlayerComponent";
import Events from "./EventsHomeComponent";
import EventDetail from "./EventDetailComponent";
import Gallery from "./GalleryComponent";
import WatchList from "./WatchlistComponent";
import Profile from "./ProfileComponent";
import Loading from "./LoadingComponent";
import { connect } from "react-redux";
import { fetchGallery, fetchComments, fetchEvents, postComment, fetchReviews, fetchUsers } from "../redux/ActionCreators";

const mapStateToProps = state => {
    return{
        galleryData: state.galleryData,
        eventsData: state.eventsData,
        comments: state.comments,
        reviews: state.reviews,
        users: state.users
    }
}

const mapDispatchToProps = {
    fetchGallery: () => (fetchGallery()),
    fetchComments: () => (fetchComments()),
    fetchEvents: () => (fetchEvents()),
    fetchReviews: () => (fetchReviews()),
    fetchUsers: () => (fetchUsers()),
    postComment: (movieId, author, comment) => (postComment(movieId, author, comment))
}

class SwitchComponent extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        this.props.fetchGallery();
        this.props.fetchComments();
        this.props.fetchEvents();
        this.props.fetchReviews();
        this.props.fetchUsers();
    }


    render() {
        const movieData = ({match}) => {
            return(
                <MovieDetailComponent 
                    movieDetail={this.props.galleryData.galleryData.filter(movieD => movieD.id === +match.params.movieId)[0]} 
                    isLoading={this.props.galleryData.isLoading}
                />
            );
        };

        const moviePlay = ({match}) => {
            return(
                <VideoPlayer 
                    movieData={this.props.galleryData.galleryData.filter(movieD => movieD.videoId === +match.params.videoId)[0]} 
                    comments={this.props.comments.comments.filter(comment => comment.movieId === +match.params.videoId)}
                    postComment={this.props.postComment}
                    isLoading={this.props.galleryData.isLoading}
                />
            );
        };

        const eventGo = ({match}) => {
            return(
                <EventDetail 
                    eventsData={this.props.eventsData.eventsData.filter(eventD => eventD.id === +match.params.eventId)[0]} 
                    isLoading={this.props.eventsData.isLoading}
                />
            );
        };



        return(
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path="/home" component={HomeVideo} />
                    <Route exact path="/"><Redirect to="/home" /></Route>
                    <Route exact path="/gallery" render={() => <Gallery galleryData={this.props.galleryData} isLoading={this.props.galleryData.isLoading} />} />
                    <Route exact path="/gallery/:movieId" component={movieData} />
                    <Route exact path="/gallery/detail/:videoId" component={moviePlay} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/events" render={() => <Events eventsData={this.props.eventsData.eventsData} isLoading={this.props.eventsData.isLoading}/>} />
                    <Route exact path="/events/:eventId" component={eventGo} />
                    <Route exact path="/watchlist" component={WatchList} />
                    <Route exact path="/profile" component={Profile} users={this.props.users}/>
                </Switch>
                {/* <Footer /> */}
            </React.Fragment>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SwitchComponent));