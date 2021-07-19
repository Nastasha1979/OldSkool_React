import React, { Component, useState } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container, Row, Col, Form, Input, Button, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function GetFirstCarousel({galleryData}) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return(
        <Carousel
            swipeable={false}
            draggable={false}
            centerMode={true}
            responsive={responsive}
            arrows={true}
            keyBoardControl={true}
            transitionDuration={250}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            
        >
            {galleryData.filter(gallery => gallery.id < 6).map(gallery => {
                return <div><Link to={`/gallery/${gallery.id}`}><img src={gallery.movieImg} className="carouselImg" /></Link></div>
            })}
        </Carousel>
    );
}

function GetSecondCarousel({galleryData}) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return(
        <Carousel
            swipeable={false}
            draggable={false}
            centerMode={true}
            responsive={responsive}
            arrows={true}
            keyBoardControl={true}
            transitionDuration={250}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            
        >
            {galleryData.filter(gallery => gallery.id > 5).map(gallery => {
                return <div><img src={gallery.movieImg} className="carouselImg" /></div>
            })}
        </Carousel>
    );
}


class Gallery extends Component {
    constructor(props) {
        super(props);
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
                                    <Form className="pb-4">
                                            <Input className="form-control mr-2 d-inline" type="search" placeholder="Search" aria-label="Search" />
                                            <Button className="d-inline" type="submit"><i className="fa fa-search" /></Button> 
                                    </Form> 
                                </Col>              
                            </Row>
                        </Container>
                    </Row>
                    <Row className="py-2">
                        <Col>
                            <h2>Comedy/Horror</h2>
                        </Col>
                    </Row>
                    <Row className="pb-2">
                        <GetFirstCarousel galleryData={this.props.galleryData} />
                    </Row>
                    <Row className="py-2">
                        <Col>
                            <h2>Drama/Other</h2>
                        </Col>
                    </Row>
                    <Row className="pb-2">
                        <GetSecondCarousel galleryData={this.props.galleryData} />
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Gallery;
    