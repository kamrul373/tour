import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import { HomeContentContext } from '../../../App';
import { FaFacebookF, FaTwitter, FaPinterestP, FaFoursquare } from 'react-icons/fa';

const Nav = () => {
	const { user, logout } = useContext( AuthContext )
	const { social } = useContext( HomeContentContext )
	const handleLogout = () => [
		logout().then( () => { toast.success( "Successfully Logout" ) } ).catch( error => console.log( error ) )
	]
	return (
		<ul className="menu menu-horizontal sticky top-0 z-10 font-semibold ">
			{/* <!-- Navbar menu content here --> */ }
			<li><Link to="/">Home</Link></li>
			<li><Link to="/">Discover</Link></li>
			<li><Link to="/">History</Link></li>
			<li><Link to="/">Events</Link></li>

			{
				user?.uid && <li><Link to="/dashboard">Dashboard</Link></li>
			}
			{
				social?.facebook &&
				<li>
					<Link to={ social.facebook }>
						<FaFacebookF className='text-md'></FaFacebookF>
					</Link>
				</li>
			}

			{
				social?.pinterest &&
				<li>
					<Link to={ social.pinterest }>
						<FaPinterestP className='text-md'></FaPinterestP>
					</Link>
				</li>
			}
			{
				social?.foursquare && <li>
					<Link to={ social.foursquare }>
						<FaFoursquare className='text-md'></FaFoursquare>
					</Link>
				</li>
			}

			{
				social?.twitter &&
				<li>
					<Link to={ social.twitter }>
						<FaTwitter className='text-md'></FaTwitter>
					</Link>
				</li>
			}
			{
				!user?.uid && <li><Link to="/login" className='btn bg-[#183d0d] text-white bg-opacity-75 hover:bg-opacity-100 hover:bg-[#14330c] duration-500 border-none rounded-lg font-bold cursor-pointer'>Login</Link></li>
			}
			{
				user?.uid && <li><button onClick={ handleLogout } className='btn bg-[#183d0d] text-white bg-opacity-75 hover:bg-opacity-100 hover:bg-[#14330c] duration-500 border-none rounded-lg font-bold cursor-pointer'>Logout</button></li>
			}


		</ul>
	);
};

export default Nav;