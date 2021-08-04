import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardImg } from "reactstrap";
import Avatar from "react-avatar";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import { Link } from "react-router-dom";
import { deleteWatchlist } from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
        galleryData: state.galleryData,
        watchlist: state.watchlist
    };
};

const mapDispatchToProps = {
    deleteWatchlist: videoId => (deleteWatchlist(videoId))
}

function GetWatchlist(props) {
    if(props.watchlist.length != 0){
        const { watchlist } = props;
        
        const {galleryData} = props;
        const renderWatchlist = galleryData.galleryData.filter(movieD => watchlist.includes(movieD.videoId)).map(watchlist => {
            return(
                
                <Col lg="2" md="3" xs="6" key={watchlist.videoId}>
                    
                        <Card>
                            <Link to={`/gallery/detail/${watchlist.videoId}`}>
                                <CardImg top width="100%" src={baseUrl + watchlist.movieImg} style={{height: "200px"}}/>
                            </Link>
                            <CardBody>
                                <Link to={`/gallery/detail/${watchlist.videoId}`}>
                                    <CardTitle>{watchlist.title}</CardTitle>
                                    <CardSubtitle>{watchlist.year}</CardSubtitle>
                                </Link>
                                <i className="fa fa-minus-square fa-2x text-center" style={{color: "red" }} onClick={() => props.remove(watchlist.videoId)} /> Remove
                            </CardBody>
                        </Card>
                    
                </Col>
            );
        });
        return renderWatchlist;
    } else {
        return <Col style={{color: "white", fontSize: "36px", paddingTop: 10}}>You have no items in your watchlist. Check out our gallery <Link to="/gallery">here</Link> and get to watching!</Col>
    }
}

class WatchList extends Component {

    deleteWatchlist(videoId){
        this.props.deleteWatchlist(videoId);
    }

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
                        <GetWatchlist 
                            galleryData={this.props.galleryData} 
                            watchlist={this.props.watchlist} 
                            remove={this.props.deleteWatchlist}    
                        />
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);