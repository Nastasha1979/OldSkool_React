import React, { Component } from "react";
import { Media, Container, Row, Col, Table, Breadcrumb, BreadcrumbItem, Fade } from "reactstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";
import { connect } from "react-redux";
import { postWatchlist, deleteWatchlist } from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
        watchlist: state.watchlist
    };
};
const mapDispatchToProps = {
    postWatchlist: videoId => (postWatchlist(videoId)),
    deleteWatchlist: videoId => (deleteWatchlist(videoId))
}

function RenderDetail({movieDetail}) {
    return(        
        
        <React.Fragment>
            
            <Row key={movieDetail.id}>
                <Col xs="12">
                    <Media className="d-flex">
                        
                            <Media object src={baseUrl + movieDetail.movieImg} alt={movieDetail.movieAlt} />
                        
                        <Media body >
                            <h1 className="text-center">{movieDetail.title} - {movieDetail.year}</h1>  
                            <h3 className="text-center">Director: {movieDetail.director}</h3>
                            <p className="text-center">{movieDetail.longDescription}</p>
                            <Table className="m-auto d-none d-md-block">
                                <tbody>
                                    <tr>
                                        <td>Director</td>
                                        <td>{movieDetail.director}</td>
                                    </tr>
                                    <tr>
                                        <td>Writer(s)</td>
                                        <td>{movieDetail.writers}</td>
                                    </tr>
                                    <tr>
                                        <td>Cast</td>
                                        <td>{movieDetail.cast}</td>
                                    </tr>
                                    <tr>
                                        <td>Producer(s)</td>
                                        <td>{movieDetail.producer}</td>
                                    </tr>
                                    <tr>
                                        <td>Cinematographer</td>
                                        <td>{movieDetail.cinematographer}</td>
                                    </tr>
                                    <tr>
                                        <td>Editor(s)</td>
                                        <td>{movieDetail.editor}</td>
                                    </tr>
                                    <tr>
                                        <td>Art Director</td>
                                        <td>{movieDetail.artDirector}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className="text-center my-3">
                                <Link to={`/gallery/detail/${movieDetail.videoId}`}><i className="fa fa-play-circle fa-5x" /></Link>
                            </div>
                        </Media>
                    </Media>
                </Col>
                
            </Row>   
        </React.Fragment> 
            
       
        
    );
}

class MovieDetailComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            fadeIn: true
        }
    }

    addToWatchlist(videoId) {
        this.props.postWatchlist(videoId);
    }

    removeFromWatchlist(videoId) {
        this.props.deleteWatchlist(videoId);
    }
    
    render(props){
        const { movieDetail } = this.props;
        if(movieDetail) {
            return(
                <React.Fragment>
                    <Fade in={this.state.fadeIn}>
                        <Container fluid className="movieDetailStyles">
                            <Row>
                                <Col xs="12">
                                    <Breadcrumb>
                                        <BreadcrumbItem>
                                            <Link to="/home">Home</Link>
                                        </BreadcrumbItem>
                                        <BreadcrumbItem>
                                            <Link to="/gallery">Gallery</Link>
                                        </BreadcrumbItem>
                                        <BreadcrumbItem>
                                            <Link active>{movieDetail.title} Detail</Link>
                                        </BreadcrumbItem>
                                    </Breadcrumb>
                                </Col>
                            </Row>
                            <Container fluid>
                                <Row className="text-center my-3" style={{color: "white"}}>
                                    <Col xs="1">
                                        <i className={this.props.watchlist.includes(movieDetail.videoId) ? "fa fa-minus fa-3x text-center" : "fa fa-plus fa-3x text-center"}
                                        style={this.props.watchlist.includes(movieDetail.videoId) ? {color: "red"} : {color: "white"}}   
                                        onClick={() => {
                                            this.props.watchlist.includes(movieDetail.videoID) ? this.removeFromWatchlist(movieDetail.videoId) : this.addToWatchlist(movieDetail.videoId)
                                        }}
                                        />
                                    </Col>
                                    <Col xs="1">
                                        <i className="fa fa-thumbs-up fa-3x text-center" 
                                            // style={ !this.state.liked ? {color: "white"} : {color: "blue"}} 
                                        // onClick={() => this.setState({liked: !this.state.liked})}
                                        />
                                    </Col>
                                </Row>
                            </Container>
                            {<RenderDetail movieDetail={movieDetail} />}
                        </Container>
                    </Fade>
                </React.Fragment>

            );

        } else {
            return <div>Error Loading</div>
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailComponent);