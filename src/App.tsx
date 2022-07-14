import React from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route, Link} from 'react-router-dom';
//components
import User from './components/User';
import UsersList from './components/UsersList';
import All from './components/All';

const App: React.FC = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#"> DEMO Project</a>
     <ul className='navbar-nav mr-auto'>
      <li className='nav-item'>
        <Link className='nav-link' to='/'>All options will be here</Link>
        </li>
        <li className='nav-item'>
        <Link className='nav-link' to='/userslist'>user list</Link>
        </li>
       
      </ul>
     </nav>
     <div className='container mt-3'>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="userslist" element={<UsersList />} />
    

      </Routes>
     </div>
    </div>
  );
}

export default App;
