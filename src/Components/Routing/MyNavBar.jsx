'use strict'

import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from 'reactstrap';

const MyNavBar = () => {
    return (
        <div>
            <Navbar color="green" light expand="md">
                <NavbarBrand>Will's Page</NavbarBrand>
                <Nav pills>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/product">Product</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/filmreq">Film Requests</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default MyNavBar