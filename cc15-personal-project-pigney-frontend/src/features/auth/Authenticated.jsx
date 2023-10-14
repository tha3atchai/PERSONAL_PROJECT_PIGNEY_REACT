import React from 'react'
import { useAuth } from '../../hooks/use-auth'
import { Navigate } from 'react-router-dom';

function Authenticated({children}) {
    const {dataUser} = useAuth();
    if(!dataUser) {
        return <Navigate to="/login" />;
    }
  return children;
}

export default Authenticated