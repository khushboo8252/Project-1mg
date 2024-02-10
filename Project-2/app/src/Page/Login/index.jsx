import React, { useState } from 'react';
import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material';

const Component = styled(Box)`
  height: 75vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #fff url(https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png) center 85% no-repeat;
  height: 100%;
  width: 35%;
  padding: 45px 35px;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOtp = styled(Button)`
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 2px 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 15px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const accountInitialValues = {
  login: {
    view: 'login',
    heading: 'Login',
    subHeading: 'Get medicine information, order medicines, book lab tests, and consult doctors online.',
  },
  signup: {
    view: 'signup',
    heading: 'Sign Up',
    subHeading: 'Sign up with your mobile number to get started',
  },
};

const signupInitialValues = {
  email: '',
  username: '',
  password: '',
};

const loginInitialValues = {
  email: '',
  password: '',
};

const LoginPage = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  const togglesignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const onInputClick = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  
  const loginUser = async () => {
    try {
      let response = await fetch("http://localhost:8080/user/login", {
         method: "POST",
         body: JSON.stringify(login),
         headers: {
          'Content-Type': 'application/json'
  }
      });
  
      console.log('Response:', response);
  
      if (response.status === 401) {
        // Handle unauthorized (401) status
        console.log('Unauthorized. Invalid credentials.');
       
        return;
      }
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.text();
  
      // Parse and handle responseData if needed
      console.log('Response Data:', responseData);
  
      alert("Login successful! Welcome, " + login.username);
    } catch (error) {
      console.error("Login failed. Please try again.", error);
      alert("Login failed. Please try again.");
    }
  };
  
  
  
  

  const signupUser = async () => {
    try {
      let response = await fetch("http://localhost:8080/user/signup", {
        method: "POST",
        body: JSON.stringify(signup),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Response:', response);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

       await response.text();

      alert("Signup successful! Welcome, " + signup.username);
    } catch (error) {
      
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Component>
        <Box style={{ display: 'flex', height: '100%' }}>
          <Image>
            <Typography>{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
          </Image>
          {account.view === 'login' ? (
            <Wrapper>
              <TextField variant="standard" onChange={(e) => onInputClick(e)} name="email" value={login.email} label="Enter Email/Mobile Number" />
              <TextField variant="standard" onChange={(e) => onInputClick(e)} name="password" value={login.password} label="Password" />
              <Text>Get access to your orders, lab tests & doctor consultations</Text>
              <LoginButton onClick={() => loginUser()}>LOGIN</LoginButton>
              <Typography style={{ textAlign: 'center' }}>OR</Typography>
              <RequestOtp>REQUEST OTP</RequestOtp>
              <CreateAccount onClick={() => togglesignup()}>New to 1mg? Create an account</CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="email" value={signup.email} label="Enter Email" />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="username" value={signup.username} label="Enter User Name" />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="password" value={signup.password} label="Password" />
              <LoginButton onClick={() => signupUser()}>CONTINUE</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
 }
export default LoginPage;
