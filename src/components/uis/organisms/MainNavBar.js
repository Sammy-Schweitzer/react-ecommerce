import React from 'react'
import { Logo } from '../atoms/Logo';
import { ProfileImage } from '../atoms/ProfileImage-atom';
import { CartImage } from '../atoms/CartImage-atom';
import { NavBarList } from '../molecules/NavBarList/NavBarList';
import { NavBarSearchInput } from '../molecules/NavBarSearchInput';
import { Container, Navbar } from 'react-bootstrap';

export const MainNavBar = () => {
    return (
        <div className="navbar-wrapper">
            <Navbar expand="md">
                <Container>
                    <Logo />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <NavBarList />
                        <NavBarSearchInput />
                    </Navbar.Collapse>
                    <ProfileImage />
                    <CartImage />
                </Container>
            </Navbar>
        </div>
    )
}
