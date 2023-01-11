import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading/Loading';
import { FaTrashAlt } from "react-icons/fa";
import { toast } from 'react-hot-toast';
const ExploreSlides = () => {
	const [loading, setLoading] = useState( false )
	const [sliders, setSliders] = useState( [] );
	useEffect( () => {
		setLoading( true )
		fetch( `${ process.env.REACT_APP_HOST }/explore` )
			.then( res => res.json() )
			.then( data => {
				setSliders( data )
				setLoading( false )
			} )
	}, [] )
	const handleDelete = id => {
		const confirm = window.confirm( "Are you sure you want to delete ?" )
		if ( confirm ) {
			fetch( `${ process.env.REACT_APP_HOST }/explore`, {
				method: "DELETE",
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify( { id } )
			} )
				.then( res => res.json() )
				.then( data => {
					const slides = sliders.filter( slides => slides._id !== id )
					setSliders( slides )
					toast.success( "Deleted successfully" )
				} )
		}
	}
	if ( loading ) {
		return <Loading></Loading>
	}
	return (
		<div>
			<h2 className='text-2xl font-semibold'>Explore Slides</h2>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th>id</th>
							<th>Title</th>
							<th>Slide</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{
							sliders.map( ( slide, idx ) => <tr key={ idx }>
								<th>{ idx + 1 }</th>
								<td>{ slide?.title }</td>
								<td>
									<div className="avatar">
										<div className="w-24 rounded-xl">
											<img src={ slide?.url } alt={ slide?.title } />
										</div>
									</div>

								</td>
								<td>
									<FaTrashAlt className='text-red-500 cursor-pointer' onClick={ () => handleDelete( slide._id ) }></FaTrashAlt>
								</td>
							</tr> )
						}
					</tbody>
				</table>
			</div>

		</div>
	);
};

export default ExploreSlides;