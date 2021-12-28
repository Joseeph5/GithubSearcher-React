import React from 'react';
import { Info, NavBar, Repos, Search, User } from '../components';
import loadingImage from '../assets/preloader.gif';
import { useSelector } from 'react-redux';

function Dashboard() {
  const { isLoading } = useSelector((state) => state);
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

export default Dashboard;
