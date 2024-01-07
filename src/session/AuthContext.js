// AuthContext.js
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/auth';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('authToken');
  const userData = localStorage.getItem('userData');
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
      dispatch(setUserData(JSON.parse(userData)));
    } else {
      setIsAuthenticated(false);
    }
      setLoading(false);
  }, [token]); // Include token in the dependency array

  return {
    isAuthenticated,
    loading,
  };
};

