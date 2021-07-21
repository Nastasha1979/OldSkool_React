import React, { Component } from "react";
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Alert } from "reactstrap";



function RenderTop({eventsData}) {
    return(
        <React.Fragment>
            <Row>
                <div style={{color:"black",  fontSize: "36px", transform: "translateY(300px)", textAlign: "center", fontWeight: "bold", border: "2px", borderRadius: "5px", backgroundColor: "white", boxShadow: "5px 3px 5px #3c3c3c"}} className="ml-3">{eventsData.title}<br/>{eventsData.date}<br/>{eventsData.time}</div>
                <img className="eventImage1" src={eventsData.otherImages[1]} alt="Image 1" />
            </Row>
            <Row>
                <div style={{color:"black",  fontSize: "36px", transform: "translateY(230px)", textAlign: "center", fontWeight: "bold", border: "2px", borderRadius: "5px", backgroundColor: "white", boxShadow: "5px 3px 5px #3c3c3c" }} className="ml-3">{eventsData.shortDescription}</div>
                <img className="eventImage1" src={eventsData.otherImages[2]} alt="Image 2"/>
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
            email: ""
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    handleSignUp(){
        this.toggleModal();
        console.log(JSON.stringify(`${this.state.name}, ${this.state.email}.`));
        alert(`${this.state.name} have signed up for the event. A confirmation will be sent to ${this.state.email}.\n We can't wait to see you!`);
 
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const email = target.email;
        const value = target.value;

        this.setState({
            [name]: value,
            [email]: value
        });
    }
   

    render(props){
        const eventsData = this.props.eventsData;
        if(eventsData) {
            return(
                <React.Fragment>
                    <div className="container fluid eventDetailContainer">
                        <Row>
                            <h1 style={{color: "white", transform: "translateY(100px)", textAlign: "center", fontFamily: "Raleway", fontSize: "36px"}}>Event Details</h1>
                        </Row>
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
                                    <Label for="name">Name</Label>
                                    <Input type="text" name="name" id="name" value={this.state.name} onChange={this.handleInputChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" id="email" value={this.state.email} onChange={this.handleInputChange}/>
                                </FormGroup>
                                <FormGroup row className="my-3">
                                    <Col xs="6" className="text-center">
                                        <Button outline color="secondary" onClick={this.toggleModal}>Cancel</Button>
                                    </Col>
                                    <Col xs="6" className="text-center">
                                        <Button 
                                            type="submit" 
                                            color="primary"                                         
                                        >
                                            Submit
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                               
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