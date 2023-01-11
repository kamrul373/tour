import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading/Loading';

const Subscriber = () => {
	const [subscribers, setSubsriber] = useState( [] );
	const [loading, setLoading] = useState( false )
	useEffect( () => {
		setLoading( true )
		fetch( `${ process.env.REACT_APP_HOST }/subscriber` )
			.then( res => res.json() )
			.then( data => {
				setSubsriber( data )
				setLoading( false )
			} )
	}, [] )

	if ( loading ) {
		return <Loading></Loading>
	}
	return (
		<div>
			<h2 className='text-2xl font-semibold'>Subscribers</h2>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th>id</th>
							<th>Name</th>
							<th>Phone</th>
						</tr>
					</thead>
					<tbody>
						{
							subscribers.map( ( subscriber, idx ) => <tr key={ idx }>
								<th>{ idx + 1 }</th>
								<td>{ subscriber?.name }</td>
								<td>{ subscriber?.phone }</td>
							</tr> )
						}
					</tbody>
				</table>
			</div>

		</div>
	);
};

export default Subscriber;