import { Dashboard, Login, Error } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

const mainUrl = 'https://api.github.com';
const rateUrl = 'https://api.github.com/rate_limit';

function App({ user, dispatch }) {
  const checkRequests = (url) => {
    axios
      .get(url)
      .then((res) => {
        let {
          rate: { remaining },
        } = res.data;
        dispatch({ type: 'set_request', payload: remaining });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUser = (url) => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    checkRequests(rateUrl);
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
