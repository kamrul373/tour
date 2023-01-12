import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { pageTitle } from '../utility/pageTitle';

const Dashboard = () => {
	const { user } = useContext( AuthContext )
	pageTitle( "Dashboard" )
	return (
		<div>
			<h2 className='text-2xl fotn-bold py-5'>Welcome { user?.email } </h2>
		</div>
	);
};

export default Dashboard;