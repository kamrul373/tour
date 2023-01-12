import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading/Loading';
import { toast } from 'react-hot-toast';

const ExploreContent = () => {
	const [loading, setLoading] = useState( false )
	const [content, setContent] = useState( [] );
	useEffect( () => {
		setLoading( true )
		fetch( `${ process.env.REACT_APP_HOST }/explorecontent` )
			.then( res => res.json() )
			.then( data => {
				setContent( data[0] )

				setLoading( false )
			} )
	}, [] )
	const handleExplore = e => {
		e.preventDefault()
		setLoading( true )
		const title = e.target.title.value;
		const description = e.target.description.value;
		const newContent = { title, description }
		fetch( `${ process.env.REACT_APP_HOST }/explorecontent`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify( newContent )
		} ).then( res => res.json() )
			.then( data => {
				toast.success( "Content Update Successfully" )
				setContent( newContent )
				setLoading( false )
			} ).catch( error => console.log( error ) )
	}
	if ( loading ) {
		return <Loading></Loading>
	}
	return (
		<div>
			<h2 className='text-2xl font-semibold'>Banner Content</h2>
			<div>
				<form className='lg:pr-20' onSubmit={ handleExplore }>
					<div className="form-control mt-4">
						<label htmlFor="title">Title</label>
						<input type="text" placeholder="Title" className="input input-bordered input-primary mt-4 w-full " id="title" name="title" defaultValue={ content?.title } />
					</div>
					<div className="form-control mt-4">
						<label htmlFor="description">Description</label>

						<textarea className="textarea textarea-primary mt-4 w-full" placeholder="Description" id="description" name="description" rows="4" defaultValue={ content?.description }></textarea>
					</div>

					<div className="form-control mt-4">
						<input type="submit" value="Update" className='btn bg-green-700 text-white hover:bg-green-900 duration-500 btn-wide' />
					</div>
				</form>
			</div>
		</div>
	);
};

export default ExploreContent;