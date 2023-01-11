import React, { useState } from 'react';
import Loading from '../components/Loading/Loading';
import { toast } from 'react-hot-toast';
const Banner = () => {
	const [bgimage, setBgimage] = useState( "" )
	const [loading, setLoading] = useState( false )
	const [slider, setSlider] = useState( [] );
	const handleBanner = async ( e ) => {
		e.preventDefault();
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
			.then( data => setBgimage( data.data.url ) )


		// storing slider image url 
		const files = e.target.slider.files

		for ( let i = 0; i <= files.length; i++ ) {
			formData.append( "image", files[i] );

			const url = `https://api.imgbb.com/1/upload?key=62c7b0100f82b41ad73c0c259289a499`
			fetch( url, {
				method: "POST",
				body: formData
			} )
				.then( res => res.json() )
				.then( data => slider.push( data.data.url ) )
		}

		const bannerData = {
			title: title,
			description: description,
			bgimg: bgimage,
			sldierImages: slider,
			status: true
		}

		fetch( `${ process.env.REACT_APP_HOST }/updatebanner`, {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify( bannerData )
		} ).then( res => res.json() )
			.then( data => {
				toast.success( "Banner updated successfull" )
				console.log( data )
				e.target.reset()
				setLoading( false )
			} )
	}

	if ( loading ) {
		return <Loading></Loading>
	}


	return (
		<div>
			<h2 className='text-2xl font-semibold'>Banner</h2>
			<form className='lg:pr-20' onSubmit={ handleBanner }>
				<div className="form-control mt-4">
					<label htmlFor="title">Banner Title</label>
					<input type="text" placeholder="Title" className="input input-bordered input-primary mt-4 w-full " id="title" name="title" required />
				</div>
				<div className="form-control mt-4">
					<label htmlFor="description">Description</label>

					<textarea className="textarea textarea-primary mt-4 w-full" placeholder="Description" id="description" name="description" rows="4" required></textarea>
				</div>
				<div className="form-control mt-4">
					<label htmlFor="bgimage">Background Image</label>

					<input type="file" className="file-input  w-full max-w-xs mt-4" id='bgimage' name='bgimage' required />
				</div>
				<div className="form-control mt-4">
					<label htmlFor="slider">Slider Image  <span className='font-semibold ml-2'>(You can choose multiple image files by pressing crtl + seelect image)</span></label>
					<input type="file" className="file-input  w-full max-w-xs mt-4" id='slider' name='slider' accept="image/*" multiple required />
				</div>
				<div className="form-control mt-4">
					<input type="submit" value="Add Banner" className='btn bg-green-700 text-white hover:bg-green-900 duration-500 btn-wide' />
				</div>
			</form>
		</div>
	);
};

export default Banner;