import React, { Component, useState } from "react";
import { Container, Nav, Navbar, NavbarToggler, Navbrand, NavItem, NavbarBrand, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, FormFeedback, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpenLog: false,
            isModalOpenCreate: false,
            firstName: "",
            lastName:  "",
            username: "",
            password: "",
            newsletter: false,
            touched: {
                username: false,
                password: false
            }
        }
        this.toggleModalCreate = this.toggleModalCreate.bind(this);
        this.handleSubmitCreate = this.handleSubmitCreate.bind(this);
        this.toggleModalLog = this.toggleModalLog.bind(this);
        this.handleSubmitLog = this.handleSubmitLog.bind(this);
        this.switchModal = this.switchModal.bind(this);
    }

    switchModal(event) {
        if(this.toggleModalCreate){
            this.setState({
                isModalOpenCreate: !this.state.isModalOpenCreate
            });

            this.setState({
                isModalOpenLog: !this.state.isModalOpenLog
            });

        } else {
            this.setState({
                isModalOpenLog: !this.state.isModalOpenLog
            });

            this.setState({
                isModalOpenCreate: !this.state.isModalOpenCreate
            });
            
        }
        event.preventDefault();
    }

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModalLog() {
        this.setState({
            isModalOpenLog: !this.state.isModalOpenLog
        });
        
    }

    toggleModalCreate() {
        this.setState({
            isModalOpenCreate: !this.state.isModalOpenCreate
        });
    }

    handleSubmitLog(event){
        alert(`Username: ${this.username.value}\nPassword: ${this.password.value}`);
        this.toggleModalLog();
        event.preventDefault();
    }

    handleSubmitCreate(event){
        alert(`First Name: ${this.state.firstName}\n
               Last Name: ${this.state.lastName}\n
               Username: ${this.state.username}\n
               Password: ${this.state.password}\n
               Newsletter Sign Up: ${this.state.newsletter}`    
            );
        this.toggleModalCreate();
        event.preventDefault();
    }


    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    validate(username, password) {
        const errors = {
            username: "",
            password: ""
        };

        if(this.state.touched.username && !username.includes("@")){
            errors.username = "Username should contain a @";
        }

        const regPass = /^\w*[^_\s]{5,}$/;
        if(this.state.touched.password && !regPass.test(password)){
            errors.password = "Only lower case, upper case, numbers, and special characters allowed and must be at least 5 characters";
        }

        return errors;
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }


    render() {
        const errors = this.validate(this.state.username, this.state.password);
        return(
            <React.Fragment>
                <header>
                    <Navbar sticky="top" dark expand="large" className="navbarStyle">
                            <Link to="/home" className="logoStyle">OldSkool</Link>
                        <Dropdown isOpen={this.state.isNavOpen} toggle={this.toggleNav} className="dropdown">
                            <DropdownToggle>
                                <NavbarToggler onClick={this.toggleNav} />
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem><Link to="/home">Home</Link></DropdownItem>
                                <DropdownItem><Link to="/gallery">Gallery</Link></DropdownItem>
                                <DropdownItem><Link to="/events">Events</Link></DropdownItem>
                                <DropdownItem><Link to="/about">About</Link></DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem><Link to="/watchlist">Your Watchlist</Link></DropdownItem>
                                <DropdownItem><a onClick={this.toggleModalLog}>Sign In</a></DropdownItem>
                                <DropdownItem><a onClick={this.toggleModalCreate}>Register</a></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Navbar>
                </header>


                <Container>
                    <Modal isOpen={this.state.isModalOpenCreate} toggle={this.toggleModalCreate}>
                        <ModalHeader toggle={this.toggleModalCreate} className="registerModalHeader">
                            <h1 className="logoStyle">OldSkool</h1>
                            Create Account
                            </ModalHeader>
                        <ModalBody >
                            <Form onSubmit={this.handleSubmitCreate}>
                                <FormGroup>
                                    <Label htmlFor="firstName">First Name: </Label>
                                    <Input 
                                        type="text" 
                                        name="firstName" 
                                        id="firstName" 
                                        value={this.state.firstName} 
                                        onChange={this.handleInputChange}
                                        />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="lastName">Last Name: </Label>
                                    <Input 
                                        type="text" 
                                        name="lastName" 
                                        id="lastName" 
                                        value={this.state.lastName} 
                                        onChange={this.handleInputChange}
                                        />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="username">Email: <small>Email will become your username</small></Label>
                                    <Input 
                                        type="text" 
                                        name="username" 
                                        id="username"  
                                        value={this.state.username}
                                        onBlur={this.handleBlur("username")}
                                        invalid={errors.username}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.username}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password: </Label>
                                    <Input 
                                        type="text" 
                                        name="password" 
                                        id="password"  
                                        value={this.state.password}
                                        onBlur={this.handleBlur("password")}
                                        invalid={errors.password}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.password}</FormFeedback>
                                </FormGroup>
                                <FormGroup check className="text-right">
                                    <Label check>
                                    <Input type="checkbox"
                                            name="newsletter"
                                            checked={this.state.newsletter}
                                            onChange={this.handleInputChange} /> {' '}
                                        Sign up to be notified of new additions to our catalog!
                                    </Label>
                                </FormGroup>
                                <FormGroup>
                                    <p>Already a member?<Link onClick={this.switchModal}> Log In</Link> here.</p>
                                </FormGroup>
                                <FormGroup className="text-right">
                                    <Button className="btnStyles" onClick={this.toggleModalCreate}>Cancel</Button>
                                    <Button type="submit" value="submit" className="btnStyles">Create Account</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </Modal>
                </Container>

                <Container>
                    <Modal isOpen={this.state.isModalOpenLog} toggle={this.toggleModalLog}>
                        <ModalHeader toggle={this.toggleModalLog} className="registerModalHeader">
                            <h1 className="logoStyle">OldSkool</h1>
                            Log In
                            </ModalHeader>
                        <ModalBody >
                            <Form onSubmit={this.handleSubmitLog}>
                                <FormGroup>
                                    <Label htmlFor="username">Username: </Label>
                                    <Input type="text" id="username" name="username" 
                                    innerRef={input => this.username = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password: </Label>
                                    <Input type="password" id="password" name="password" 
                                    innerRef={input => this.password = input} />
                                </FormGroup>
                                <FormGroup>
                                    <p>Don't have an account?<Link onClick={this.switchModal}> Create Account</Link> here.</p>
                                </FormGroup>
                                <FormGroup className="text-right">
                                    <Button type="submit" value="submit">Log In</Button>
                                </FormGroup>
                            </Form>    
                        </ModalBody>
                    </Modal>
                </Container>
            </React.Fragment>

        );
    }
}

export default Header;