import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSingIn, ...otherprops }) => (
    <button className={`${isGoogleSingIn ? 'google-sign-in' : ''} custom-button`} {...otherprops}>{children}</button>
);

export default CustomButton;