import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { Toaster } from 'react-hot-toast';
import { createContext, useEffect, useState } from 'react';
import Loading from './components/Loading/Loading';

export const HomeContentContext = createContext();

function App () {
	const [banner, setBanner] = useState( [] );
	const [social, setSocial] = useState( [] );
	const [loading, setLoading] = useState( true )
	const [bannerslider, setBannerSlider] = useState( [] );
	const [open, setOpen] = useState( false );
	const [config, setConfig] = useState( [] )
	// site config
	useEffect( () => {
		setLoading( true )
		fetch( `${ process.env.REACT_APP_HOST }/config` )
			.then( res => res.json() )
			.then( data => {
				setConfig( data )
				setLoading( false )
			} )
	}, [] )
	// getting active banner content
	useEffect( () => {
		setLoading( true )
		fetch( `${ process.env.REACT_APP_HOST }/banner` )
			.then( res => res.json() )
			.then( data => {
				setBanner( data )
				setLoading( false )
			} )
	}, [] )
	// getting banner slides

	useEffect( () => {
		setLoading( true )
		fetch( `${ process.env.REACT_APP_HOST }/bannerslide` )
			.then( res => res.json() )
			.then( data => {
				setBannerSlider( data )
				setLoading( false )
			} )
	}, [] )
	useEffect( () => {
		setLoading( true )
		fetch( `${ process.env.REACT_APP_HOST }/social` )
			.then( res => res.json() )
			.then( data => {
				setSocial( data )
				setLoading( false )
			} )
	}, [] )

	const content = {
		banner,
		social,
		setSocial,
		open,
		setOpen,
		bannerslider,
		config,
		setConfig
	}
	if ( loading ) {
		return <Loading></Loading>
	}
	return (
		<div className="max-w-[1365px]">
			<HomeContentContext.Provider value={ content }>
				<RouterProvider router={ router }></RouterProvider>
				<Toaster />
			</HomeContentContext.Provider>
		</div>
	);
}

export default App;
