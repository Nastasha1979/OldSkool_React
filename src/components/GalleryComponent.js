import React, { Component, useState } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container, Row, Col, Form, FormGroup, Input, Button, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Loading } from "./LoadingComponent";

function GetFirstCarousel({galleryData}) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 1 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 
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
                return (
                    <div>
                        <Link to={`/gallery/${gallery.id}`}>
                            <img src={baseUrl + gallery.movieImg} className="carouselImg" />
                        </Link>
                    </div>
                );
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
                return <div><Link to={`/gallery/${gallery.id}`}><img src={baseUrl + gallery.movieImg} className="carouselImg" /></Link></div>
            })}
        </Carousel>
    );
}



class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ""
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        
        event.preventDefault();
    
    }

    handleSearch(galleryData, event) {
        event.preventDefault();
        alert(`SearchTerm: ${this.state.searchTerm}.`);
        const filter = galleryData.filter(gallery => gallery.title == this.state.searchTerm)[0];
        console.log(filter);
        
        

    }

    render(props) {
        if(this.props.isLoading){
            return(
                <div className="text-center m-auto my-5">
                    <Loading />
                </div>
            );
        }
        
        if(!this.state.matches){
            return(
                <React.Fragment>
                    <Container fluid className="galleryContainerStyles">
                        <Row>
                            <Col xs="12">
                                <Breadcrumb className="breadcrumbStyles">
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
                                            <FormGroup row>
                                                <Col xs="10">
                                                    <Input 
                                                        className="form-control mr-2 d-inline" 
                                                        type="text" 
                                                        placeholder="Search"
                                                        name="searchTerm"
                                                        id="searchTerm"
                                                        value={this.state.searchTerm} 
                                                        onChange={this.handleChange}
                                                    />
                                                </Col>
                                                <Col xs="2">
                                                    <Button className="d-inline" type="submit" onClick={(event) => this.handleSearch(this.props.galleryData.galleryData, event)}><i className="fa fa-search" /></Button>
                                                </Col> 
                                            </FormGroup>
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
                            <GetFirstCarousel galleryData={this.props.galleryData.galleryData} />
                        </Row>
                        <Row className="py-2">
                            <Col>
                                <h2>Drama/Other</h2>
                            </Col>
                        </Row>
                        <Row className="pb-2">
                            <GetSecondCarousel galleryData={this.props.galleryData.galleryData} />
                        </Row>       
                    </Container>
                </React.Fragment>
            );
        }
    }
}

export default Gallery;
    