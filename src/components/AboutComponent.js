import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";


function About(){
    return(
        <Container fluid className="site-footer">
                <Row className="text-center">
                    <Col xs="12"><h1>About Us</h1></Col>
                </Row>
                <Row>
                    <Col xs="6" className="text-center">
                        <address className="m-auto">
                            8715 Datapoint Dr<br />
                            San Antonio, TX 78229
                        </address>
                    </Col>
                    <Col xs="6" className="text-center">
                        <section className="m-auto">
                            210-763-9873<br />
                            nastasha.leach@outlook.com
                        </section>
                    </Col>

                </Row>
                <Row>
                    <Col xs="6" className="text-center">
                        <p>Find us on social media</p>
                        <ul className="list-unstyled">
                            <li><a className="btn socialLinks" href="http://instagram.com/"><i className="fa fa-instagram"></i></a></li>
                            <li><a className="btn socialLinks" href="http://facebook.com/"><i className="fa fa-facebook"></i></a></li>
                            <li><a className="btn socialLinks" href="http://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                            <li><a className="btn socialLinks" href="http://youtube.com/"><i className="fa fa-youtube"></i></a></li>
                        </ul>
                    </Col>
                    <Col xs="6">
                        <ul className="list-unstyled text-center termsStuff">
                            <li><a role="button">Privacy</a></li>
                            <span> | </span>
                            <li><a role="button">Terms</a></li>
                            <span> | </span>
                            <li><a role="button" >About</a></li>
                            <span> | </span>
                            <li><a role="button">Contact</a></li>
                        </ul>
                    </Col>

                </Row>
            </Container>
    );
}

export default About;