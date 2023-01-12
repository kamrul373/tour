import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../components/Loading/Loading';
import { pageTitle } from '../utility/pageTitle';

const BannerContent = () => {
	const [loading, setLoading] = useState( false )
	const [content, setContent] = useState( [] );
	pageTitle( "Banner Content" )
	useEffect( () => {
		setLoading( true )
		fetch( `${ process.env.REACT_APP_HOST }/banner` )
			.then( res => res.json() )
			.then( data => {
				setContent( data )

				setLoading( false )
			} )
	}, [] )
	const handleBannerContent = e => {
		e.preventDefault()
		setLoading( true )
		const title = e.target.title.value;
		const description = e.target.description.value;
		const bgimg = e.target.bgimage.files[0];
		const formData = new FormData();

		// uploading bg image 
		formData.append( "image", bgimg );

		const url = `https://api.imgbb.com/1/upload?key=62c7b0100f82b41ad73c0c259289a499`
		fetch( url, {
			method: "POST",
			body: formData
		} ).then( res => res.json() )
			.then( data => {
				const bgimage = data.data.url
				const newContent = { title, description, bgimage }
				fetch( `${ process.env.REACT_APP_HOST }/banner`, {
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
			} )



	}
	if ( loading ) {
		return <Loading></Loading>
	}
	return (
		<div>
			<h2 className='text-2xl font-semibold'>Bammer Content</h2>
			<div>
				<form className='lg:pr-20' onSubmit={ handleBannerContent }>
					<div className="form-control mt-4">
						<label htmlFor="title"> Title</label>
						<input type="text" placeholder="Title" className="input input-bordered input-primary mt-4 w-full " id="title" name="title" defaultValue={ content?.title } />
					</div>
					<div className="form-control mt-4">
						<label htmlFor="description">Description</label>

						<textarea className="textarea textarea-primary mt-4 w-full" placeholder="Description" id="description" name="description" rows="4" defaultValue={ content?.description }></textarea>
					</div>
					<div className="form-control mt-4">
						<label htmlFor="bgimage">Background Image</label>
						<div className='py-3'>
							<p className='py-2'>Current Image </p>
							<img src={ content?.bgimage } alt={ content?.title } className='w-60' />
						</div>
						<input type="file" className="file-input  w-full max-w-xs mt-4" id='bgimage' name='bgimage' required />
					</div>

					<div className="form-control mt-4">
						<input type="submit" value="Update" className='btn bg-green-700 text-white hover:bg-green-900 duration-500 btn-wide' />
					</div>
				</form>
			</div>
		</div>
	);
};

export default BannerContent;