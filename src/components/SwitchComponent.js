import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import HomeVideo from "./HomeVideoComponent"; 
import Footer from "./FooterComponent";
import Gallery from "./GalleryComponent";
import GALLERYDATA from "../shared/gallery";

class SwitchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryData: GALLERYDATA
        }
    }


    render() {
        return(
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomeVideo} />
                    <Route exact path="/gallery" render={() => <Gallery galleryData={this.state.galleryData} />} />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default SwitchComponent;