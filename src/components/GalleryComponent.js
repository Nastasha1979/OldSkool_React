import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container, Row, Col, Form, Input, Button, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
class Gallery extends Component {
    constructor(props) {
        super(props);
    }

    getFilms = () => {
        const showFilms = this.props.galleryData.map(gallery => {
            return(
                <Col md="3">
                    <Card className="galleryCardStyle my-3">
                        <CardImg src={gallery.movieImg} alt={gallery.movieAlt} />
                        <CardBody>
                            <CardTitle tag="h5">{gallery.title}</CardTitle>
                            <CardText tag="h6">{gallery.year}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            );
        });
        return showFilms;
    }

    render(props) {

        return(
            <React.Fragment>
                <Container fluid className="galleryContainerStyles">
                    <Row>
                        <Col xs="12">
                            <Breadcrumb className="">
                                <BreadcrumbItem>
                                    <Link to="/home">
                                        Home
                                    </Link>                   
                                </BreadcrumbItem>
                                <BreadcrumbItem active>
                                        Gallery
                                </BreadcrumbItem>
                            </Breadcrumb>  
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <h1>Gallery</h1>
                    </Row>
                    <Row className="text-center">
                        <Container fluid>
                            <Row className="row justify-content-center">
                                <Col xs="4" className="">     
                                    <Form className=" pb-4">
                                            <Input className="form-control mr-2 d-inline" type="search" placeholder="Search" aria-label="Search" />
                                            <Button className="btn d-inline" type="submit"><i className="fas fa-search" /></Button> 
                                    </Form> 
                                </Col>              
                            </Row>
                        </Container>
                    </Row>
                    <Row>
                        {this.getFilms()}
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Gallery;
    