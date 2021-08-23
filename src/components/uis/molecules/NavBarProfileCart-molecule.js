import React from 'react';
import { CartImage } from '../atoms/CartImage-atom';
import { ProfileImage } from '../atoms/ProfileImage-atom';

const NavBarProfileCart = () => {
    return (
        <div>
            <ProfileImage />
            <CartImage />
        </div>
    )
}

export default NavBarProfileCart
