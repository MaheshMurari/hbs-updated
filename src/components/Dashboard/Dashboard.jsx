import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirection
import './Dashboard.css'; // Custom CSS for the dashboard
import { FaUser, FaEnvelope, FaPhone, FaIdBadge, FaCalendar, FaCalendarDay, FaRegCalendarPlus } from 'react-icons/fa'; // Importing icons
import { FaAward, FaCalendarXmark, FaRegCalendarCheck, FaRegCalendarMinus } from 'react-icons/fa6';
import Navbar from '../EmployeeNavbar/Navbar';


const EmployeeDashboard = () => {
  const [employeeDetails, setEmployeeDetails] = useState(null);
  const navigate = useNavigate(); // Hook for navigation
  const token = localStorage.getItem('token');
  const employeeId=localStorage.getItem('employeeId');
  
 
  useEffect(() => {
    // API call to fetch employee 
    const fetchEmployeeDetails = async () => {
      try {
        const response = await fetch(`https://localhost:7135/api/account/Employees/${employeeId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Add Bearer token for authentication
            'Content-Type': 'application/json' // Optional: Specify content type
          },
        });
    
       // Fetch based on Employee ID (adjust API as needed)
        const data = await response.json();
        setEmployeeDetails(data);
      } catch (error) {
        console.error('Error fetching employee details:', error);
      }
    };

    fetchEmployeeDetails();
  }, []);



  if (!employeeDetails) {
    return <p>Loading employee details...</p>;
  }

  return (
    
    <div className="main-content">
      <div className="employee-info">
        <h2 className="heading">PROFILE</h2>

        <div className="employee-card1">
          <div className="employee-details">
            <p><FaIdBadge className="icon" /> <strong>Employee ID: </strong> {employeeDetails.employeeId}</p>
            <p><FaUser className="icon" /> <strong>Name:</strong> {employeeDetails.firstName} {employeeDetails.lastName}</p>
            <p><FaAward className="icon"/><strong>Designation:</strong> {employeeDetails.position}</p>
            <p><FaPhone className="icon" /> <strong>Contact:</strong> {employeeDetails.phoneNumber}</p>
            <p><FaEnvelope className="icon" /> <strong>Email:</strong> {employeeDetails.email}</p>
            <p><FaRegCalendarCheck className="icon" /> <strong>Joined On:</strong>{new Date(employeeDetails.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

      
      </div>
    </div>
    
  );
};

export default EmployeeDashboard;
