import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";
import styled from 'styled-components';
//importing form validation components
import FormValidation from './formValidation/FormValidation';
import ValidateAuth from './formValidation/ValidateAuth';

const Button = styled.button`
    border: 2px solid black;
    padding: 2%;
    background-color: black;
    color: white;
    &:hover {
        background-color: white;
        color: black;
    }
    @media (max-width: 500px) {
    width: 100%;
  }
`
const SignIn = props => {
    const myProps = props;    
    const INITIAL_STATE = {
        username: "",
        password: ""
    }
    const { handleChange, user, handleSubmit, handleBlur, errors, isSubmitting } = FormValidation(INITIAL_STATE, ValidateAuth, myProps);

    return (
        <>
            <h1 style={{padding: '1%'}}>Sauti Studio</h1>
            <div className="styled-div">
                <form className="styled-form" onSubmit={ handleSubmit }>
                    <label htmlFor="username">Username:</label>
                    <input className="styled-input"
                        type="text"
                        placeholder="Enter Username"
                        name="username" 
                        value={ user.username }
                        required
                        onChange={ handleChange }
                        onBlur={ handleBlur }
                        />
                        {errors.username && <p className="error-input">{errors.username}</p>}

                    <label htmlFor="password">Password:</label>
                    <input className="styled-input"
                        type="password" 
                        placeholder="Enter Password"
                        name="password"
                        value={ user.password }
                        required
                        onChange={ handleChange }
                        onBlur={ handleBlur }
                        />
                        {errors.password && <p className="error-input">{errors.password}</p>}

                    <Button disabled={isSubmitting} type="submit">Login</Button>
                    <p>Or make an account here: <Link to='./sign-up'>Sign Up</Link></p>
                    <a href="https://fervent-bassi-308b70.netlify.com/">Return to Marketing Page</a> 
                </form>
            </div>
        </>
    )
}

export default SignIn;