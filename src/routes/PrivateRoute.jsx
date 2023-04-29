import React, { useContext } from 'react';
import { ProgressBar, Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    // console.log(location)

    const { user, loading } = useContext(AuthContext)
    if(loading){
        return <div className='mx-auto text-center'> <Spinner className="text-center" animation="border" variant="primary" /></div>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivateRoute;