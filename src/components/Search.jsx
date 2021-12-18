import React, { useRef } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { connect } from 'react-redux';
import axios from 'axios';

const userUrl = 'https://api.github.com/users/';

function Search({ error, requests, isLoading, dispatch }) {
  const user = useRef('');

  const searchUser = async (url) => {
    dispatch({
      type: 'set_error',
      payload: {
        show: false,
        msg: '',
      },
    });
    dispatch({ type: 'set_loading', payload: true });
    const res = await axios.get(url).catch((error) => {
      // console.log(error);
      dispatch({
        type: 'set_error',
        payload: {
          show: true,
          msg: 'there is no user with that username',
        },
      });
    });

    if (res) {
      dispatch({ type: 'set_user', payload: res.data });
      const { repos_url, followers_url } = res.data;
      await Promise.all([
        axios(`${repos_url}?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ])
        .then((results) => {
          const [repos, followers] = results;

          if (repos.status === 200) {
            dispatch({ type: 'set_repos', payload: repos.data });
          }
          if (followers.status === 200) {
            dispatch({ type: 'set_followers', payload: followers.data });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    dispatch({ type: 'set_loading', payload: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (requests === 0) {
      dispatch({
        type: 'set_error',
        payload: { show: true, msg: 'sorry, you have exceeded your hourly rate limit!' },
      });
    }
    if (user.current.value) {
      searchUser(userUrl + user.current.value);
    }
  };

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        {error.show && (
          <ErrorWrapper>
            <p>{error.msg}</p>
          </ErrorWrapper>
        )}
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <MdSearch />
            <input type='text' placeholder='enter github user' ref={user} />
            {!isLoading && <button type='submit'>search</button>}
          </div>
        </form>
      </Wrapper>
    </section>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-control {
    background: var(--clr-white);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    input {
      border-color: transparent;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
      color: var(--clr-grey-3);
      padding: 0.25rem 0.5rem;
    }
    input::placeholder {
      color: var(--clr-grey-3);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
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

    svg {
      color: var(--clr-grey-5);
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    color: var(--clr-grey-5);
    font-weight: 400;
  }
`;
const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`;

const mapStateToProps = (store) => {
  return { ...store };
};

export default connect(mapStateToProps)(Search);
