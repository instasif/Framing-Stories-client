import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import {ImSpinner} from 'react-icons/im'

const PrivateRoute = ({children}) => {
    const {user, loading} =useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <ImSpinner className='h-40 mx-auto text-green-800 animate-spin'></ImSpinner>
    }

    if(!user){
        return <Navigate
        to="/login"
        state={{from: location}}
        replace
        ></Navigate>
    }
    return children;
};

export default PrivateRoute;