import { Dashboard, Login, Error } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

const rateUrl = 'https://api.github.com/rate_limit';

function App() {
  const dispatch = useDispatch();

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

  useEffect(() => {
    checkRequests(rateUrl);
    // eslint-disable-next-line
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

export default App;
