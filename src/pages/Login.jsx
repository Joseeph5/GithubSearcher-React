import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import loginImg from '../assets/login-img.svg';
function Login() {
  return (
    <Wrapper>
      <div className='container'>
        <img src={loginImg} alt='github user' />
        <h1>Github Searcher</h1>
        <Link to='/' className='btn'>
          Log In / Sign Up
        </Link>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  padding-top: 8rem;
  .container {
    width: 90vw;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;

export default Login;
