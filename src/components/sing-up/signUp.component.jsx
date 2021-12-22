import React from 'react';
import './signUp.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../firebase/firebase.util";

class SignUp extends React.Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmedPassword: ''
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmedPassword } = this.state;

        if (password !== confirmedPassword) {
            alert("these password din't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmedPassword: ''
            })
        } catch (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);

        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }
    render() {
        const { displayName, email, password, confirmedPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmedPassword"
                        value={confirmedPassword}
                        onChange={this.handleChange}
                        label='Confirm Passwod'
                        required
                    />

                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;