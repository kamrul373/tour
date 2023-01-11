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
	const [loading, setLoading] = useState( true )
	// getting active banner
	useEffect( () => {
		fetch( `${ process.env.REACT_APP_HOST }/banner` )
			.then( res => res.json() )
			.then( data => {
				setBanner( data )
				setLoading( false )
			} )
	}, [] )
	const content = {
		banner
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
