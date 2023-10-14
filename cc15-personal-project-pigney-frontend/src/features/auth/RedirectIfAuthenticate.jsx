import React from 'react'
import { useAuth } from '../../hooks/use-auth';
import { Navigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import { useEffect } from 'react';

function RedirectIfAuthenticate({children}) {
    const {dataUser} = useAuth();
   
    if(dataUser) {
    return (
        <>
            <Navigate to={`/profile/${dataUser.user.id}`} />
        </>
    )
    }

    return children;
}

export default RedirectIfAuthenticate