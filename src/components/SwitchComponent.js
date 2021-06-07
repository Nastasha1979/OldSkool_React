import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import HomeVideo from "./HomeVideoComponent"; 
import About from "./AboutComponent";
import MovieDetailComponent from "./MovieDetailComponent";
import VideoPlayer from "./VideoPlayerComponent";
import Gallery from "./GalleryComponent";
import GALLERYDATA from "../shared/gallery";
import MOVIEDETAILDATA from "../shared/movieDetail"

class SwitchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryData: GALLERYDATA,
            movieDetail: MOVIEDETAILDATA
        }
    }


    render() {
        const movieData = ({match}) => {
            return(
                <MovieDetailComponent movieDetail={this.state.movieDetail.filter(movieD => movieD.id === +match.params.movieId)[0]} />
            );
        };

        const moviePlay = ({match}) => {
            return(
                <VideoPlayer movieData={this.state.movieDetail.filter(movieD => movieD.videoId === +match.params.videoId)[0]} />
            );
        };

        return(
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path="/home" component={HomeVideo} />
                    <Route exact path="/gallery" render={() => <Gallery galleryData={this.state.galleryData} />} />
                    <Route exact path="/gallery/:movieId" component={movieData} />
                    <Route exact path="/gallery/detail/:videoId" component={moviePlay} />
                    <Route exact path="/about" component={About} />
                    <Redirect path="/home" /> 
                </Switch>
                {/* <Footer /> */}
            </React.Fragment>
        );
    }
}

export default SwitchComponent;