import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSingIn, inverted, ...otherprops }) => (
    <button className={`${isGoogleSingIn ? 'google-sign-in' : ''} custom-button ${inverted ? 'inverted' : ''} custom-button`}  {...otherprops}>{children}</button>
);

export default CustomButton;