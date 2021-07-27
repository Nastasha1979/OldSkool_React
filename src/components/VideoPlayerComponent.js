import React, { Component } from "react";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Media, Input, Button, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
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

function RenderVideo({movieData}){
    return(
        <React.Fragment>
            <Row>
                <Col xs="12">
                    <h1>{movieData.title} ({movieData.year})</h1>
                </Col>
            </Row>
            <Row>
                <Col xs="12" className="embed-responsive embed-responsive-16by9">
                    <video controls src={baseUrl + movieData.videoUrl} alt={movieData.videoAlt} className="embed-responsive-item"/>
                </Col>
            </Row>
        </React.Fragment>
        
    );
}

function Comments({comments}) {
    const comment = comments.map(comment => { 
        return(
        <div className="row mb-3 commentRender" key={comment.id}>
            <Media left className="col-1 commentAvatar">
                <Avatar round src={baseUrl + comment.avatar} size={30}/>
            </Media>
            <Media body className="col-11">
                <Media heading>
                    <h6>{comment.author}</h6>
                </Media>
                <h5>{comment.comment}</h5>                
            </Media>
            <hr />
        </div>

        );
    });
    return comment;
}



class VideoPlayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            newComment: "",
            author: "Signed In User",
            liked: false,
            like: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitComment = this.submitComment.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            newComment: event.target.value
        });
    }

    submitComment = () => {
        alert(`Your comment: ${this.state.newComment}.`);
        this.props.postComment(this.props.movieData.videoId, this.state.author, this.state.newComment);
        this.resetForm();
    }

    resetForm(){
        this.setState({newComment: ""});
    }

    addToWatchlist(videoId) {
        this.props.postWatchlist(videoId);
    }

    removeFromWatchlist(videoId) {
        this.props.deleteWatchlist(videoId);
    }

    
    render(props) {
        const { movieData } = this.props;
        const { comments } = this.props;
        
        if(movieData) {
            return(
                <React.Fragment>
                    <Container fluid className="videoPlayerStyles">
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
                                        <Link to={`/gallery/${movieData.id}`}>{movieData.title} Detail</Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <Link active>{movieData.title}</Link>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </Col>
                        </Row>
                        <RenderVideo movieData={movieData} />
                        <Container fluid>
                            <Row className="text-center my-3" style={{color: "white"}}>
                                <Col xs="1">
                                    <i className={this.props.watchlist.includes(movieData.videoId) ? "fa fa-minus fa-3x text-center" : "fa fa-plus fa-3x text-center"}  
                                    style={this.props.watchlist.includes(movieData.videoId) ? {color: "red"} : {color: "white"}}  
                                    onClick={() => {
                                        this.props.watchlist.includes(movieData.videoId) ? this.removeFromWatchlist(movieData.videoId) : this.addToWatchlist(movieData.videoId)
                                    }}
                                    />
                                    <h5>Add to Watchlist</h5>
                                </Col>
                                
                            </Row>
                        </Container>
                        <Container fluid>
                            <Row className="mb-3">
                                <h1>Comments</h1>
                            </Row>
                            <Row>
                                <Comments comments={comments}/>
                            </Row>
                            <Row className="m-auto">
                                <Form>
                                    <FormGroup row className="m-auto mb-5">
                                        <Col xs="11">
                                            <Input
                                                placeholder="Post a comment"
                                                type="text" 
                                                name="comment" 
                                                id="comment"  
                                                value={this.state.newComment}
                                                onChange={this.handleInputChange}
                                            />
                                        </Col>
                                        <Col xs="1">
                                            <i className="fa fa-edit fa-2x" style={{color: "white"}} onClick={() => this.submitComment(movieData.movieId)}/>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </Row>
                        </Container>
                    </Container>
                </React.Fragment>
            );
        } else {
            return <div>Error Loading</div>
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);