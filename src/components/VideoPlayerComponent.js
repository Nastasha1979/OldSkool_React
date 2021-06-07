import React from "react";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

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
                    <video controls src={movieData.videoUrl} alt={movieData.videoAlt} className="embed-responsive-item"/>
                </Col>
            </Row>
        </React.Fragment>
        
    );
}

function VideoPlayer(props) {
    if(props.movieData) {
    
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
                                    <Link to={`/gallery/${props.movieData.id}`}>{props.movieData.title} Detail</Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <Link active>{props.movieData.title}</Link>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                    {<RenderVideo movieData={props.movieData} />}
                </Container>
            </React.Fragment>

        );

    } else {
        return <div>Error Loading</div>
    }
}

export default VideoPlayer;