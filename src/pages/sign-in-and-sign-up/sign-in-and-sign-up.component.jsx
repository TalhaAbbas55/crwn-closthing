import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import SingIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sing-up/signUp.component';

const signInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SingIn />
        <SignUp />
    </div>
);

export default signInAndSignUpPage;