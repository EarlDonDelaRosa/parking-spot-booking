import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserContext from './parking-lots/UserContext';
import { useMemo, useState } from 'react';
import AdminPage from './parking-lots/AdminPage';
import ValidateByFormik from './parking-lots/ValidateByFormik';
import ValidateBooking from './parking-lots/ValidateBooking';
import AdminListPage from './parking-lots/AdminListPage';

function App() {
  const [user, setUser] = useState(null);
  // const [id, setId] = useState({});
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  // const idValue = useMemo(() => ({ id, setId }), [id, setId]);

  return (
    <Router basename='book-a-parking-spot'>
      <UserContext.Provider value={ value }>
      <Routes>
        <Route exact path='/' element={ <ValidateByFormik /> }></Route>
        <Route exact path='/userpage' element={ <ValidateBooking /> }></Route>
        <Route exact path='/admin' element={ <AdminPage /> }></Route>
        <Route exact path='/adminlist' element={ <AdminListPage /> }></Route>
      </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
