import React from 'react';
import { Info, NavBar, Repos, Search, User } from '../components';

function Dashboard() {
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
