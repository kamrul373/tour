import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../components/Loading/Loading';
import { HomeContentContext } from '../App';
import { pageTitle } from '../utility/pageTitle';

const SiteConfig = () => {
	const { config, setConfig } = useContext( HomeContentContext )
	const [loading, setLoading] = useState( false )
	pageTitle( "Settings" )
	useEffect( () => {
		setLoading( true )
		fetch( `${ process.env.REACT_APP_HOST }/config` )
			.then( res => res.json() )
			.then( data => {
				setConfig( data )
				setLoading( false )
			} )
	}, [setConfig] )
	const handleSetting = e => {
		e.preventDefault();
		const form = e.target;
		const title = form.title.value;
		const copyright = form.copyright.value;
		const sitedata = { title, copyright }

		fetch( `${ process.env.REACT_APP_HOST }/config`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify( sitedata )
		} ).then( res => res.json() )
			.then( data => {
				toast.success( "Successfully Updated" )
				setConfig( sitedata )
			} )
	}
	if ( loading ) {
		return <Loading></Loading>
	}
	return (
		<div>
			<form className='lg:pr-20' onSubmit={ handleSetting }>
				<div className="form-control mt-4">
					<label htmlFor="title">App Title</label>
					<input type="text" placeholder="Title" className="input input-bordered input-primary mt-4 w-full " id="title" name="title" defaultValue={ config?.title } />
				</div>
				<div className="form-control mt-4">
					<label htmlFor="copyright">Copyright</label>
					<textarea className="textarea textarea-primary mt-4 w-full" placeholder="copyright" id="copyright" name="copyright" rows="4" defaultValue={ config?.copyright } ></textarea>
				</div>
				<div className="form-control mt-4">
					<input type="submit" value="Update" className='btn bg-green-700 text-white hover:bg-green-900 duration-500 btn-wide' />
				</div>
			</form>
		</div>
	);
};

export default SiteConfig;