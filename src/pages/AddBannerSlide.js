import React, { useState } from 'react';
import Loading from '../components/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { pageTitle } from '../utility/pageTitle';

const AddBannerSlide = () => {
	pageTitle( "Add Banner slide" )
	const [loading, setLoading] = useState( false )
	const navigate = useNavigate()
	const handleAddSlide = e => {
		e.preventDefault()
		setLoading( true )
		const title = e.target.title.value;
		const description = e.target.description.value;
		const slide = e.target.bannerslide.files[0];
		const formData = new FormData();

		// uploading bg image 
		formData.append( "image", slide );

		const url = `https://api.imgbb.com/1/upload?key=62c7b0100f82b41ad73c0c259289a499`
		fetch( url, {
			method: "POST",
			body: formData
		} ).then( res => res.json() )
			.then( data => {
				console.log( data )
				const slide = {
					title, description, url: data.data.url
				}
				fetch( `${ process.env.REACT_APP_HOST }/bannerslide`, {
					method: "POST",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify( slide )
				} ).then( res => res.json() )
					.then( data => {
						setLoading( false )
						navigate( "/dashboard/bannerslides" )
						toast.success( "Succesfully slide added" );
						e.target.reset()
					} ).catch( error => console.log( error ) )
			} ).catch( erorr => console.log( erorr ) )

	}
	if ( loading ) {
		return <Loading></Loading>
	}
	return (
		<div>
			<h2 className='text-2xl font-semibold'>Add Banner Slide</h2>
			<div>
				<form className='lg:pr-20' onSubmit={ handleAddSlide }>
					<div className="form-control mt-4">
						<label htmlFor="title">Slide Title</label>
						<input type="text" placeholder="Title" className="input input-bordered input-primary mt-4 w-full " id="title" name="title" required />
					</div>
					<div className="form-control mt-4">
						<label htmlFor="description">Slide Description</label>

						<textarea className="textarea textarea-primary mt-4 w-full" placeholder="Description" id="description" name="description" rows="4" required></textarea>
					</div>
					<div className="form-control mt-4">
						<label htmlFor="bannerslide">Slide</label>
						<input type="file" className="file-input  w-full max-w-xs mt-4" id='bannerslide' name='bannerslide' required />
					</div>
					<div className="form-control mt-4">
						<input type="submit" value="Add Slide" className='btn bg-green-700 text-white hover:bg-green-900 duration-500 btn-wide' />
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddBannerSlide;