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
	const [open, setOpen] = useState( false );
	// getting active banner
	useEffect( () => {
		setLoading( true )
		fetch( `${ process.env.REACT_APP_HOST }/banner` )
			.then( res => res.json() )
			.then( data => {
				setBanner( data )
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
		open,
		setOpen
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
