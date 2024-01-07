// withAuthentication.js

import React from 'react';
import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const withAuthentication = (Component) => {
  const WithAuthentication = (props) => {
    const auth = useAuth();
    if (auth.loading) {
      return <Spinner size='sm' />;
    }
    if (!auth.isAuthenticated) {
      return <Navigate to="/login" />;
    }
    else{
      return <Component {...props} />;
    }
  };

  return WithAuthentication;
};

export default withAuthentication;