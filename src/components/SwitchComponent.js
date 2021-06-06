import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import HomeVideo from "./HomeVideoComponent"; 

class SwitchComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <Header />
                <HomeVideo />
            </React.Fragment>
        );
    }
}

export default SwitchComponent;