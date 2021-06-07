import React, { useState } from "react";
import { Media, Container, Row, Col, Table, Breadcrumb, BreadcrumbItem, Fade } from "reactstrap";
import { Link } from "react-router-dom";



function RenderDetail({movieDetail}) {
    return(        
        
        <React.Fragment>
            <Row key={movieDetail.id}>
                <div className="text-center">
                    <h1>{movieDetail.title} - {movieDetail.year}</h1>
                </div>
                <Col xs="12">
                    <Media>
                        <Media left>
                            <Media object src={movieDetail.movieImg} alt={movieDetail.movieAlt} />
                        </Media>
                        
                        <Media body className="text-center">
                            <h1>{movieDetail.title} - {movieDetail.year}</h1>  
                            <h3>{movieDetail.director}</h3>
                            <p>{movieDetail.longDescription}</p>
                            <Table>
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
                        </Media>
                    </Media>
                </Col>
                <Link to={`/gallery/detail/${movieDetail.videoId}`} className="btn btn-primary">Watch Movie</Link>
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