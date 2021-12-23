import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from "../firebase/firebase.util";

class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        }
    }

    handleChange = (event) => {

        const { value, name } = event.target;

        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <FormInput
                        type="email"
                        name="email"
                        id="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label="email"
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <FormInput
                        type="password"
                        name="password"
                        id="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label="password"
                        required
                    />

                    <div className="buttons">
                        <CustomButton type="submit"  >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSingIn type="button">Google SignIn </CustomButton>
                    </div>
                </form>

            </div>
        );

    }
}

export default SignIn;