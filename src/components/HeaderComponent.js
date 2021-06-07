import React, { Component } from "react";
import { Nav, Navbar, NavbarToggler, Navbrand, NavItem, NavbarBrand, Collapse } from "reactstrap";
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render() {
        return(
            <React.Fragment>
                <header>
                    <Navbar dark expand="md" className="navbarStyle">
                            <Link href="/home" className="logoStyle">OldSkool</Link>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <Link to="/gallery"> Gallery </Link>   
                                </NavItem>
                                <NavItem className="d-none d-md-block">
                                    <span > | </span>
                                </NavItem>
                                <NavItem>
                                    <Link to="/about"> About </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </header>
            </React.Fragment>

        );
    }
}

export default Header;