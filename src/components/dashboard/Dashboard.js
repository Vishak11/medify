import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      // Redirect to login page if not authenticated
      navigate('/');
    } else {
      // Check token validity with your backend if necessary
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('authToken');
    // Redirect to the login page
    navigate('/');
  };

  if (!isAuthenticated) {
    return null; // or a loading spinner
  }

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {/* Your dashboard content here */}

      {/* Logout Button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
