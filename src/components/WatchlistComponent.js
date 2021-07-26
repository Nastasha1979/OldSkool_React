import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardImg } from "reactstrap";
import Avatar from "react-avatar";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = state => {
    return {
        movieDetail: state.movieDetail,
        watchlist: state.watchlist
    };
};

function GetWatchlist(props) {
    if(props.watchlist){
        const { watchlist } = props;
        
        const {movieDetail} = props;
        const renderWatchlist = movieDetail.movieDetail.filter(movieD => watchlist.includes(movieD.videoId)).map(watchlist => {
            return(
                
                <Col xs="2" key={watchlist.videoId}>
                    <Card>
                        <CardImg top width="100%" src={baseUrl + watchlist.movieImg} style={{height: "200px"}}/>
                        <CardBody>
                            
                            <CardTitle>{watchlist.title}</CardTitle>
                            <CardSubtitle>{watchlist.year}</CardSubtitle>
                        </CardBody>
                    </Card>
                </Col>
            );
        });
        return renderWatchlist;
    } else {
        return <Col>You have no items in your watchlist.</Col>
    }
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
                        <GetWatchlist movieDetail={this.props.movieDetail} watchlist={this.props.watchlist}/>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps)(WatchList);