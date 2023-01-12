import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import Nav from '../components/Shared/Nav/Nav';
import Footer from '../components/Footer/Footer';
import { HomeContentContext } from '../App';
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-hot-toast';
import { FaFacebookF, FaTwitter, FaPinterestP, FaFoursquare } from 'react-icons/fa';
const Main = () => {
	const { config } = useContext( HomeContentContext )
	const { user, logout } = useContext( AuthContext )
	const { social } = useContext( HomeContentContext )
	const handleLogout = () => [
		logout().then( () => { toast.success( "Successfully Logout" ) } ).catch( error => console.log( error ) )
	]
	return (
		<div>
			<div className="drawer">
				<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col ">
					{/* <!-- Navbar --> */ }
					<div className="w-full navbar px-20 py-5 fixed top-0 left-0 right-0 bg-black max-w-[99%] bg-opacity-40 z-20 text-white main-menu">
						<div className="flex-none lg:hidden">
							<label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
							</label>
						</div>
						<div className="flex-1 px-2 mx-2 font-bold ">
							<Link to="/">{ config.title ? config.title : "Agumentik" }</Link>
						</div>
						<div className="flex-none hidden lg:block \ ">
							<Nav></Nav>
						</div>
					</div>
					<Outlet></Outlet>
					<Footer></Footer>
				</div>
				<div className="drawer-side">
					<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
					<ul className="menu p-4 w-80 bg-base-100">
						{/* <!-- Sidebar content here --> */ }
						<li><Link to="/">Home</Link></li>
						<li><Link to="/">Discover</Link></li>
						<li><Link to="/">History</Link></li>
						<li><Link to="/">Events</Link></li>
						{
							user?.uid && <li><Link to="/dashboard">Dashboard</Link></li>
						}
						<div className='flex my-2'>
							{
								social?.facebook &&
								<li >
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
						</div>
						{
							!user?.uid && <li><Link to="/login" className='btn bg-[#183d0d] text-white bg-opacity-75 hover:bg-opacity-100 hover:bg-[#14330c] duration-500 border-none rounded-lg font-bold cursor-pointer'>Login</Link></li>
						}
						{
							user?.uid && <li><button onClick={ handleLogout } className='btn bg-[#183d0d] text-white bg-opacity-75 hover:bg-opacity-100 hover:bg-[#14330c] duration-500 border-none rounded-lg font-bold cursor-pointer'>Logout</button></li>
						}
					</ul>

				</div>
			</div>
		</div>
	);
};

export default Main;