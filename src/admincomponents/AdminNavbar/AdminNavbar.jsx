import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './AdminNavbar.css';
import {FaUserTie,FaGlobe,FaUserPlus,FaUser, FaSignOutAlt} from 'react-icons/fa';
//import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const AdminNavbar = ({setIsAdmin}) => {
  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleLogOut = () => {
    // Remove token from localStorage
    localStorage.removeItem('Admintoken');
    // Redirect to login page
    setIsAdmin(false);
    navigate('/admin');
    window.location.reload(); 
  };
  return (
    <nav className="sidebar">
      <div className="logo">
        <i className=""></i> <img className='bank1' src="./assets/logowithname.png"></img>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/admin-dashboard">
            <FaGlobe></FaGlobe><i></i>
            <div className="dashBoard">HB Overview</div>
            
          </Link>
        </li>
        <li>
          <Link to="/manage-employee">
            <FaUserTie></FaUserTie><i></i>
            <div className="manageEmployee">Manage Employees</div>
          </Link>
        </li>
        <li>
          <Link to="/add-employee">
            <FaUserPlus></FaUserPlus><i></i>
            <div className="addEmployee">Add Employee</div>
          </Link>
        </li>
        <li>
          <Link to="/manage-customer">
          <FaUser></FaUser><i></i>
            <div className="manageCustomer">Manage Customers</div>
          </Link>
        </li>
        
      
     
        <li>
          <Link>
          <FaSignOutAlt></FaSignOutAlt><i></i>
          <div className="signOut" onClick={handleLogOut}>Sign out</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
