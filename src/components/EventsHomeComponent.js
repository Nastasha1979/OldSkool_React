import React from "react";
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Breadcrumb, BreadcrumbItem } from "reactstrap";
import StackGrid from "react-stack-grid";
import { Link } from "react-router-dom";



function Events(props) {
    return(
        <React.Fragment>
            <Container fluid className="eventsContainer">
                <Row>
                    <Col xs="12">
                        <Breadcrumb className="">
                            <BreadcrumbItem>
                                <Link to="/home">
                                    Home
                                </Link>                   
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                    Events
                            </BreadcrumbItem>
                        </Breadcrumb>  
                    </Col>
                </Row>
                <Row className="py-3 eventTitle mx-auto" style={{color: "white", fontFamily: "Raleway"}}>Upcoming Events</Row>
                <StackGrid
                    columnWidth={250}
                    gutterWidth={10}
                    monitorImagesLoaded
                >
                    {props.eventsData.map(event => {
                        return(
                            
                                <Card  className="cardContainer" key={event.id}>
                                    <Link to={`/events/${event.id}`}>
                                    <CardBody>
                                        <CardTitle tag="h3">{event.title}</CardTitle>
                                    </CardBody>
                                    <CardImg top width="100%" src={event.mainMovieImg} alt={event.mainMovieAlt} />
                                    <CardBody>
                                        <CardText tag="h4">{event.shortDescription}</CardText>
                                        <CardText tag="h4">{event.date} - {event.time}</CardText>
                                    </CardBody>
                                    </Link>
                                </Card>
                            
                        );
                    })}
                </StackGrid>    
            </Container>
        </React.Fragment>
    );
}

export default Events;