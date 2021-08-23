import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import './navBar.scss';

export const NavBarList = () => {
    return (
        <Nav>
            {/* <Nav.Link href="#men">
                    Men
                </Nav.Link>
                <Nav.Link href="#women">
                    Women
                </Nav.Link>
                <Nav.Link href="#jewellery">
                    Jewellery
                </Nav.Link>
                <Nav.Link href="#electonics">
                    Electronics
                </Nav.Link> */}
            <Nav.Item>
                <NavLink
                    id="men-button"
                    activeClassName="active-button"
                    className="navbar__link"
                    to="/men"
                >
                    Men
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink
                    id="women-button"
                    activeClassName="active-button"
                    className="navbar__link"
                    to="/women"
                >
                    Women
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink
                    id="jewellery-button"
                    activeClassName="active-button"
                    className="navbar__link"
                    to="/jewellery"
                >
                    Jewellery
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink
                    id="electronics-button"
                    activeClassName="active-button"
                    className="navbar__link"
                    to="/electonics"
                >
                    Electronics
                </NavLink>
            </Nav.Item>

        </Nav>
    )
}

