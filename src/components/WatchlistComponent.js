import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardImg } from "reactstrap";
import Avatar from "react-avatar";


function GetWatchlist() {
    return(
        <Col xs="4">
            <Card>
                <CardImg top width="100%" src="/logo192.png"/>
                <CardBody>
                    
                    <CardTitle>Watchlist Title</CardTitle>
                    <CardSubtitle>Watchlist Description</CardSubtitle>
                </CardBody>
            </Card>
        </Col>
    );
}

class WatchList extends Component {



    render() {
        return(
            <React.Fragment>
                <Container className="watchlistContainer">
                    <Row>
                        <Col xs="12" className="text-center">
                            <h1>Your Watchlist</h1>
                        </Col>
                    </Row>
                    <Row>
                        <GetWatchlist />
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default WatchList;