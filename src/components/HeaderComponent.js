import React, { Component } from "react";
import { Nav, Navbar, NavbarToggler, Navbrand, NavItem, NavbarBrand, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                    <Navbar dark expand="large" className="navbarStyle">
                            <Link href="/home" className="logoStyle">OldSkool</Link>
                        <Dropdown isOpen={this.state.isNavOpen} toggle={this.toggleNav} className="dropdown">
                            <DropdownToggle>
                                <NavbarToggler onClick={this.toggleNav} />
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem><Link to="/home">Home</Link></DropdownItem>
                                <DropdownItem><Link to="/gallery">Gallery</Link></DropdownItem>
                                <DropdownItem><Link to="/">Articles</Link></DropdownItem>
                                <DropdownItem><Link to="/events">Events</Link></DropdownItem>
                                <DropdownItem><Link to="/about">About</Link></DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem><Link to="/">Sign In</Link></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Navbar>
                </header>
            </React.Fragment>

        );
    }
}

export default Header;