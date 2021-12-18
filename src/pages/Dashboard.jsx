import React from 'react';
import { Info, NavBar, Repos, Search, User } from '../components';
import loadingImage from '../assets/preloader.gif';
import { connect } from 'react-redux';

function Dashboard({ isLoading }) {
  if (isLoading) {
    return (
      <main>
        <NavBar />
        <Search />
        <img src={loadingImage} className='loading-img' alt='loding' />
      </main>
    );
  }

  return (
    <div>
      <NavBar />
      <Search />
      <Info />
      <User />
      <Repos />
    </div>
  );
}
const mapStateToProps = (store) => {
  return { ...store };
};
export default connect(mapStateToProps)(Dashboard);
