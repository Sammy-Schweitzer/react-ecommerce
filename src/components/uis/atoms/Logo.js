import React from 'react'
import { Navbar } from 'react-bootstrap';
import brandLogo from '../../../assets/image/bootstrap-reboot.svg';

export const Logo = () => {
    return (
        <Navbar.Brand href="/home">
            <img src={brandLogo} width="66" height="48" alt="brand-logo" />
        </Navbar.Brand>
    )
}

