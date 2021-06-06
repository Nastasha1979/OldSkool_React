import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import HomeVideo from "./HomeVideoComponent"; 
import Footer from "./FooterComponent";
import MovieDetailComponent from "./MovieDetailComponent";
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

        return(
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomeVideo} />
                    <Route exact path="/gallery" render={() => <Gallery galleryData={this.state.galleryData} />} />
                    <Route exact path="/gallery/:movieId" component={movieData} />
                    <Redirect path="/" /> 
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default SwitchComponent;