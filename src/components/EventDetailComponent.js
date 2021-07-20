import React, { Component } from "react";
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Alert } from "reactstrap";


//Look at this page to fix the form: https://reactjs.org/docs/forms.html
function RenderTop({eventsData}) {
    return(
        <React.Fragment>
            <Row>
                <div style={{color:"red",  fontSize: "36px", transform: "translateY(300px)", textAlign: "center", fontWeight: "bold" }} className="ml-3">{eventsData.title}<br/>{eventsData.date}<br/>{eventsData.time}</div>
                <img className="eventImage1" src={eventsData.otherImages[1]} alt="Image 1" />
            </Row>
            <Row>
                <div style={{color:"red",  fontSize: "36px", transform: "translateY(230px)", textAlign: "center", fontWeight: "bold" }} className="ml-3">{eventsData.shortDescription}</div>
                <img className="eventImage1" src={eventsData.otherImages[2]} alt="Image 2" />
            </Row>
        </React.Fragment>
    );
}

class EventDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            name: "",
            email: "",
            signedUp: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    handleSignUp(){
        if(this.state.signedUp){
            console.log(JSON.stringify(`${this.state.name}, ${this.state.email}, ${this.state.signedUp}.`));
        } 
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const email = target.email;

        if(name){
            this.setState({[name: name]});
        }
    }
   

    render(props){
        const eventsData = this.props.eventsData;
        if(eventsData) {
            return(
                <React.Fragment>
                    <div className="container fluid eventDetailContainer">
                        <RenderTop eventsData={eventsData} />
                        <div className="row">
                            <Col className="m-auto text-center my-5">
                                <Button outline color="info" size="lg" onClick={this.toggleModal}>Sign Up</Button>
                            </Col>
                        </div>
                    </div>


                    <Modal isOpen={this.state.showModal} toggle={this.toggleModal} className="modalContainer">
                        <ModalHeader toggle={this.toggleModal}>Sign Up for {eventsData.title}</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleSignUp}>
                                <FormGroup>
                                    <Label for="name">Username</Label>
                                    <Input type="text" name="name" id="name" onChange={this.setState({name: this.state.name})}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" id="email" onChange={this.setState({email: this.state.email})}/>
                                </FormGroup>
                            </Form>
                            <Row className="my-3">
                                <Col xs="6" className="text-center">
                                    <Button outline color="secondary" onClick={this.toggleModal}>Cancel</Button>
                                </Col>
                                <Col xs="6" className="text-center">
                                    <Button 
                                        type="submit" 
                                        color="primary" 
                                        onClick={() => {
                                            this.setState({signedUp: !this.state.signedUp})                             
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </Col>
                            </Row>   
                        </ModalBody>
                    </Modal>
                </React.Fragment>

                
            );

        } else {

            return <div>ERROR</div>
        }
    }
}

export default EventDetail;