import React, { Component } from "react";
import { Container, Row, Col, Input, Label, Form, FormGroup, Modal, ModalBody, ModalHeader, Button} from "reactstrap";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


function GetAbout({singleUser}) {
    return(
        <h1>{singleUser.aboutMe}</h1>
    );
}

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    
    render(props) {
        const { users } = props;
        const singleUser = users.users.filter(user => user.id === 0);
        return(
            <Container fluid>
                <Row className="m-auto text-center">
                    <Col xs="12" ><Avatar round src="assets/cary1.jpg" size={200}/></Col>
                    
                </Row>
                <Row className="m-auto text-center">
                    <Col xs="6"><h2>{singleUser.username}</h2></Col>
                    <Col xs="6"><h2>Member Since: {singleUser.memberSince}</h2></Col>
                </Row>
                <Row className="m-auto text-center my-5" style={{color: "white"}}>
                    <Col xs="6">
                        <h1>About Me</h1>
                        <GetAbout singleUser={singleUser} />
                    </Col>
                    <Col xs="6">
                        <h1>My Friends</h1>
                    </Col>
                </Row>
                <Row className="text-center" style={{color: "white"}}>
                    <Col xs="6">
                        <h1>My Watchlist</h1>
                    </Col>
                    <Col xs="6">
                        <h1>My Events</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Profile;
