import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { Toaster } from 'react-hot-toast';

function App () {
	return (
		<div className="max-w-[1365px]">
			<RouterProvider router={ router }></RouterProvider>
			<Toaster />
		</div>
	);
}

export default App;
