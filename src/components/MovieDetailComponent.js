import React, { Component } from "react";
import { Media, Container, Row, Col, Table, Breadcrumb, BreadcrumbItem, Fade, Modal, ModalHeader, ModalBody, Button, Input, Label, Form, FormGroup } from "reactstrap";
import Avatar from "react-avatar";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";
import { connect } from "react-redux";
import { postWatchlist, deleteWatchlist, postReviews } from "../redux/ActionCreators";
import { Loading } from "./LoadingComponent";




const mapStateToProps = state => {
    return {
        watchlist: state.watchlist,
        reviews: state.reviews
    };
};
const mapDispatchToProps = {
    postWatchlist: videoId => (postWatchlist(videoId)),
    deleteWatchlist: videoId => (deleteWatchlist(videoId)),
    postReviews: (movieId, author, review, rating) => (postReviews(movieId, author, review, rating))
}

function RenderDetail({movieDetail}) {
    return(        
        
        <React.Fragment>
            
            <Row key={movieDetail.id}>
                <Col md="12">
                    <Media className="d-flex">
                        
                            <div className="d-none d-md-block"><Media object src={baseUrl + movieDetail.movieImg} alt={movieDetail.movieAlt} /></div>
                        
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
            fadeIn: true,
            modalVisible: false,
            author: "",
            review: "",
            rating: 0
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRating = this.handleRating.bind(this);
    }

    addToWatchlist(videoId) {
        this.props.postWatchlist(videoId);
    }

    removeFromWatchlist(videoId) {
        this.props.deleteWatchlist(videoId);
    }

    getReviews(movieDetail){
        const rev = this.props.reviews.reviews.filter(review => review.movieId === movieDetail.videoId).map(review => {
            return(
                <div className="row mb-4 commentRender" key={review.id}>
                    <Media left className="col-1 commentAvatar">
                        <div className="d-none d-md-block text-center"><Avatar round src={baseUrl + review.avatar} size={40}/></div>
                    </Media>
                    <Media body className="col-11 mb-1">
                        <Media heading>
                            <h5>{review.author}</h5>
                            <StarRatings
                                rating={review.rating}
                                starRatedColor="yellow"
                                numberOfStars={5}
                                starSpacing="2px"
                                starDimension="10px"
                            />
                        </Media>
                        <h5>{review.review}</h5>                
                    </Media>
                    <hr />
                </div>
            );
        });
        return rev;
    }

    toggleModal(){
        this.setState({
            modalVisible: !this.state.modalVisible
        });
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        event.preventDefault();
    }

    handleRating(newRating) {
        this.setState({
            rating: newRating
        });
        console.log(this.state.rating);
    }

    handleSubmit(movieId){
        this.props.postReviews(movieId, this.state.author, this.state.review, this.state.rating);
        this.resetForm();
    }

    resetForm(){
        this.setState({
            author: "",
            review: "",
            rating: 0
        });
    }
    
    render(props){
        const { movieDetail } = this.props;
        if(this.props.isLoading){
            return(
                <div className="text-center m-auto my-5">
                    <Loading />
                </div>
            );
        }

        if(movieDetail) {
            return(
                <React.Fragment>
                    <Fade in={this.state.fadeIn}>
                        <Container fluid className="movieDetailStyles">
                            <Row>
                                <Col xs="12">
                                    <Breadcrumb className="breadcrumbStyles">
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
                                    <Col xs="3">
                                        <i className={this.props.watchlist.includes(movieDetail.videoId) ? "fa fa-minus fa-2x text-center" : "fa fa-plus fa-2x text-center"}
                                        style={this.props.watchlist.includes(movieDetail.videoId) ? {color: "red"} : {color: "white"}}   
                                        onClick={() => {
                                            this.props.watchlist.includes(movieDetail.videoID) ? this.removeFromWatchlist(movieDetail.videoId) : this.addToWatchlist(movieDetail.videoId)
                                        }}
                                        />
                                        <h5>Add to Watchlist</h5>
                                    </Col>
                                    
                                </Row>
                            </Container>
                            {<RenderDetail movieDetail={movieDetail} />}
                        </Container>
                        <Container fluid>
                            <Row className="my-4"><Col><h2 style={{color: "white"}}>Member Reviews</h2></Col></Row>
                            <hr style={{color: "white"}} />
                            <Row>
                                {this.getReviews(movieDetail)}
                            </Row>
                            <Row className="m-auto text-center mb-5">
                                <Col xs="12">
                                    <Button onClick={this.toggleModal} className="btn btn-dark">Submit Review</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Fade>

                    <Modal isOpen={this.state.modalVisible} toggle={this.toggleModal} className="reviewModalStyle">
                        <ModalHeader toggle={this.toggleModal} style={{backgroundColor: "black"}} className="modalHead">
                            <Row><h2 className="logoStyle">OldSkool</h2></Row>
                            <Row><h3 style={{color: "white"}}>Submit Review</h3></Row>
                        </ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup row>
                                    <Label><strong>Author</strong></Label>
                                    <Input name="author" id="author" value={this.state.author} type="text" onChange={this.handleChange}/>
                                </FormGroup>
                                <FormGroup row className="my-3">
                                    <Label><strong>Your Rating</strong></Label>
                                    <StarRatings
                                        rating={this.state.rating}
                                        starRatedColor="orange"
                                        starHoverColor="blue"
                                        changeRating={this.handleRating}
                                        numberOfStars={5}
                                        starDimension="20px"
                                    />
                                </FormGroup>
                                <FormGroup row>
                                    <Label><strong>Your Review</strong></Label>
                                    <Input name="review" id="review" value={this.state.review} type="textarea" onChange={this.handleChange}/>
                                </FormGroup>
                                <FormGroup row className="text-center my-3">
                                    <Col xs="6">
                                        <Button onClick={this.toggleModal} color="secondary">Cancel</Button>
                                    </Col>
                                    <Col xs="6">
                                    <Button type="Submit" color="primary" 
                                        onClick={() => {
                                            this.handleSubmit(movieDetail.videoId)
                                            this.toggleModal()
                                        }}>Submit</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        
                    </Modal>
                </React.Fragment>

            );

        } else {
            return <div>Error Loading</div>
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailComponent);