import React, { useState } from "react";
import { Media, Container, Row, Col, Table, Breadcrumb, BreadcrumbItem, Fade } from "reactstrap";
import { Link } from "react-router-dom";



function RenderDetail({movieDetail}) {
    return(        
        
        <React.Fragment>
            
            <Row key={movieDetail.id}>
                <Col xs="12">
                    <Media className="d-flex">
                        
                            <Media object src={movieDetail.movieImg} alt={movieDetail.movieAlt} />
                        
                        <Media body >
                            <h1 className="text-center">{movieDetail.title} - {movieDetail.year}</h1>  
                            <h3 className="text-center">Director: {movieDetail.director}</h3>
                            <p className="text-center">{movieDetail.longDescription}</p>
                            <Table className="m-auto">
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

function MovieDetailComponent(props) {
    const [fadeIn] = useState(true);
    if(props.movieDetail) {
    
        return(
            <React.Fragment>
                <Fade in={fadeIn}>
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
                                        <Link active>{props.movieDetail.title} Detail</Link>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </Col>
                        </Row>
                        {<RenderDetail movieDetail={props.movieDetail} />}
                    </Container>
                </Fade>
            </React.Fragment>

        );

    } else {
        return <div>Error Loading</div>
    }
}

export default MovieDetailComponent;