import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";


function Footer() {
    return(
        <footer className="site-footer">
            <Container fluid>
                <div className="text-center">
                    <Link to="/" className="text-center">      
                        <p className="logoStyle text-center">OldSkool</p>
                    </Link>
                </div>
                <Row>

                    <Col xs="6">
                        <p>Find us on social media</p>
                        <ul className="list-unstyled ">
                            <li><a className="btn socialLinks" href="http://instagram.com/"><i className="fa fa-instagram"></i></a></li>
                            <li><a className="btn socialLinks" href="http://facebook.com/"><i className="fa fa-facebook"></i></a></li>
                            <li><a className="btn socialLinks" href="http://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                            <li><a className="btn socialLinks" href="http://youtube.com/"><i className="fa fa-youtube"></i></a></li>
                        </ul>
                    </Col>
                    <Col xs="6">
                        <ul className="list-unstyled text-center ">
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
        </footer>
    );
}

export default Footer;