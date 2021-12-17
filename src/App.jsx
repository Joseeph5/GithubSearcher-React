import { Dashboard, Login, Error } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const mainUrl = 'https://api.github.com';

function App({ user }) {
  console.log(user);
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
