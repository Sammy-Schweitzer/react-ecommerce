import React from 'react';
import personImage from '../../../assets/image/person-circle.svg';

export const ProfileImage = () => {
    return (
        <div>
            <img className="personImage" src={personImage} alt="person" />
            <p>profile</p>
        </div>
    )
}
