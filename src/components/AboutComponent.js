import React, { Component } from "react";
import { Container, Row, Col, Input, Label, Form, FormGroup, Modal, ModalBody, ModalHeader, Button} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postContact } from "../redux/ActionCreators";


const mapDispatchToProps = {
    postContact: (name, email, message) => (postContact(name, email, message))
}

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            fName: "",
            message: "",
            showModal: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        });
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

    handleSubmit() {
        alert(`${this.state.fName}, you have submitted your message. You will get a confirmation at ${this.state.email}`);
        this.props.postContact(this.state.fName, this.state.email, this.state.message);
        this.toggleModal();
    }

    render(){
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
                                <li><Link role="button" to="/profile">Profile</Link></li>
                                <span> | </span>
                                <li><a role="button">Terms</a></li>
                                <span> | </span>
                                <li><a role="button" >About</a></li>
                                <span> | </span>
                                <li><a role="button" onClick={this.toggleModal}>Contact</a></li>
                            </ul>
                        </Col>

                    </Row>

                    <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal} style={{backgroundColor: "black"}}>
                            <Row><h2 className="logoStyle">OldSkool</h2></Row>
                            <Row><h3 style={{color: "white"}}>Submit Message</h3></Row>
                        </ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup row>
                                    <Label><strong>First Name</strong></Label>
                                    <Input name="fName" id="fName" value={this.state.fName} type="text" onChange={this.handleChange}/>
                                </FormGroup>
                                <FormGroup row>
                                    <Label><strong>Email</strong></Label>
                                    <Input name="email" id="email" value={this.state.email} type="email" onChange={this.handleChange}/>
                                </FormGroup>
                                <FormGroup row>
                                    <Label><strong>Your Message</strong></Label>
                                    <Input name="message" id="message" value={this.state.message} type="textarea" onChange={this.handleChange}/>
                                </FormGroup>
                                <FormGroup row>
                                    <Button className="btn btn-secondary" onClick={this.toggleModal}>Cancel</Button>
                                    <Button type="submit" className="btn btn-secondary" onClick={this.handleSubmit}>Submit</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </Modal>
                </Container>
        );
    }
}

export default connect(null, mapDispatchToProps)(About);