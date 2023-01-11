import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../components/Loading/Loading';
import { HomeContentContext } from '../App';

const SocialMedia = () => {
	const { social } = useContext( HomeContentContext )
	const [loading, setLoading] = useState( false )
	// getting current social media

	// event handler of social media update event
	const handleSocialMedia = ( e ) => {
		e.preventDefault();
		setLoading( true )
		const form = e.target;
		const facebook = form.facebook.value;
		const pinterest = form.pinterest.value;
		const foursquare = form.foursquare.value;
		const twitter = form.twitter.value;
		const socialMediaLinks = {
			facebook, pinterest, foursquare, twitter
		}
		fetch( `${ process.env.REACT_APP_HOST }/social`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify( socialMediaLinks )
		} ).then( res => res.json() )
			.then( data => {
				console.log( data )
				toast.success( "Updated Successfully" )
			} )
			.catch( error => console.log( error ) )
	}
	if ( loading ) {
		return <Loading></Loading>
	}
	return (
		<div>
			<div>
				<h2 className='text-2xl font-semibold'>Social Media</h2>
				<form className='lg:pr-20' onSubmit={ handleSocialMedia }>
					{/* facebook */ }
					<div className="form-control mt-4">
						<label htmlFor="facebook">Facebook URL</label>
						<input type="url" placeholder="facebook" className="input input-bordered input-primary mt-4 w-full " id="facebook" name="facebook" defaultValue={ social.facebook } />
					</div>
					{/* pinterest */ }
					<div className="form-control mt-4">
						<label htmlFor="pinterest">Pinterest URL</label>
						<input type="url" placeholder="pinterest" className="input input-bordered input-primary mt-4 w-full " id="pinterest" name="pinterest" defaultValue={ social.pinterest } />
					</div>
					{/* foursquare */ }
					<div className="form-control mt-4">
						<label htmlFor="foursquare">Foursquare URL</label>
						<input type="url" placeholder="foursquare" className="input input-bordered input-primary mt-4 w-full " id="foursquare" name="foursquare" defaultValue={ social.foursquare } />
					</div>
					{/* Twitte */ }
					<div className="form-control mt-4">
						<label htmlFor="twitter">Twitte URL</label>
						<input type="url" placeholder="twitter" className="input input-bordered input-primary mt-4 w-full " id="twitter" name="twitter" defaultValue={ social.twitter } />
					</div>
					<div className="form-control mt-4">
						<input type="submit" value="Update" className='btn bg-green-700 text-white hover:bg-green-900 duration-500 btn-wide' />
					</div>
				</form>
			</div>
		</div>
	);
};

export default SocialMedia;