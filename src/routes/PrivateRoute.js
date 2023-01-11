import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Loading from '../components/Loading/Loading';
const PrivateRoute = ( { children } ) => {
	const { loading, user } = useContext( AuthContext );
	const location = useLocation();
	// console.log("private", loading)
	if ( loading ) {
		return <Loading></Loading>
	}
	if ( user ) {
		return children
	}

	return <Navigate to="/login" state={ { from: location } } replace></Navigate>

};

export default PrivateRoute;
