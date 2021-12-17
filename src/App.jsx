import { Dashboard, Login, Error } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

const mainUrl = 'https://api.github.com';

function App({ user }) {
  useEffect(() => {
    axios
      .get(mainUrl)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (store) => {
  return { ...store };
};

export default connect(mapStateToProps)(App);
