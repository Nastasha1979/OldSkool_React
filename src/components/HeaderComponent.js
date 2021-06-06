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
                            <NavbarBrand href="/" className="logoStyle">OldSkool</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <Link to="/">Gallery</Link>
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