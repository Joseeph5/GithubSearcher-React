import React from 'react';
import styled from 'styled-components';

function NavBar() {
  return (
    <Wrapper>
      <h4>
        Welcome, <strong>joseph</strong>
      </h4>
      <button type='button'>logout</button>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    border-radius: 5px;
    border-color: transparent;
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    background: var(--clr-primary-5);
    color: var(--clr-white);
    transition: var(--transition);
    cursor: pointer;
    &:hover {
      background: var(--clr-primary-8);
      color: var(--clr-primary-1);
    }
  }
`;

export default NavBar;
