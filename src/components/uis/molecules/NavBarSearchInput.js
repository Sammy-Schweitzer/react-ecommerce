import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap';

import searchImage from '../../../assets/image/search.svg';

export const NavBarSearchInput = () => {
    return (
        <InputGroup>
            <InputGroup.Text id="basic-addon1">
                <img className="searchImage" src={searchImage} alt="search" />
            </InputGroup.Text>
            <FormControl
                placeholder="Search for products, brands and more"
                aria-label="Search"
                aria-describedby="basic-addon1"
            />
        </InputGroup>
    )
}
