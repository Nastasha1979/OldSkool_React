import React, { useState } from "react";
import { Media, Container, Row, Col, Table, Button } from "reactstrap";


function RenderDetail({movieDetail}) {
    return(        
        
        <React.Fragment>
            <Row key={movieDetail.id}>
                <div className="text-center">
                    <h1>{movieDetail.title} - {movieDetail.year}</h1>
                </div>
                <Media>
                    <Media left>
                        <Media object src={movieDetail.movieImg} alt={movieDetail.movieAlt} />
                    </Media>
                    
                    <Media body className="text-center">
                        <h1>{movieDetail.title} - {movieDetail.year}</h1>  
                        <h3>{movieDetail.director}</h3>
                        <p>{movieDetail.longDescription}</p>
                        <Table striped>
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
                <Button>Watch Movie</Button>
            </Row>   
        </React.Fragment> 
            
       
        
    );
}

function MovieDetailComponent(props) {
    if(props.movieDetail) {
    
        return(
            <React.Fragment>
                <Container fluid className="movieDetailStyles">
                    {<RenderDetail movieDetail={props.movieDetail} />}
                </Container>
            </React.Fragment>

        );

    } else {
        return <div>Error Loading</div>
    }
}

export default MovieDetailComponent;