import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from "../firebase/firebase.util";

class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = (event) => {
        console.log(event.target);
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
                        <CustomButton onClick={signInWithGoogle} isGoogleSingIn>{' '}Google SignIn </CustomButton>
                    </div>
                </form>

            </div>
        );

    }
}

export default SignIn;