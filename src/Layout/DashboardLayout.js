import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-hot-toast';
const DashboardLayout = () => {
	const { user, logout } = useContext( AuthContext )
	const handleLogout = () => [
		logout().then( () => { toast.success( "Successfully Logout" ) } ).catch( error => console.log( error ) )
	]
	return (
		<div className="drawer drawer-mobile">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col px-5 py-5">
				{/* <!-- Page content here --> */ }
				<label htmlFor="my-drawer-2" className="btn bg-green-700 drawer-button lg:hidden my-4"><FaBars className='text-xl text-white font-semibold'></FaBars> <span className='ml-2 text-white font-semibold'>Menu</span> </label>
				<Outlet></Outlet>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
				<ul className="menu p-4 w-80 bg-[#3D4451] text-white">
					{/* <!-- Sidebar content here --> */ }
					<li><Link to="/" className='text-2xl font-bold'>Agumentik</Link></li>
					<li className='hover:bg-[#191f29] cursor-pointer'><Link to="/dashboard/bannercontnet">Banner contnet</Link></li>
					<li className='hover:bg-[#191f29] cursor-pointer'><Link to="/dashboard/addbannerslide">ADD Banner Slide</Link></li>
					<li className='hover:bg-[#191f29] cursor-pointer'><Link to="/dashboard/bannerslides">Banner Slides</Link></li>
					<li className='hover:bg-[#191f29] cursor-pointer'><Link to="/dashboard/social">Social Media</Link></li>
					<li className='hover:bg-[#191f29] cursor-pointer'><Link to="/dashboard/subscribers">Subscribers</Link></li>
					<li className='hover:bg-[#191f29] cursor-pointer'><Link to="/dashboard/addexploreslide">Add Explore Slide</Link></li>
					<li className='hover:bg-[#191f29] cursor-pointer'><Link to="/dashboard/updateexplorecntent">Explore Content</Link></li>
					<li className='hover:bg-[#191f29] cursor-pointer'><Link to="/dashboard/exploreslides">Exploreslides</Link></li>
					<li className='hover:bg-[#191f29] cursor-pointer'><Link to="/dashboard/config">Setting</Link></li>
					{
						user?.uid && <li className='py-5'><button onClick={ handleLogout } className='btn bg-[#0d3601] text-white hover:bg-opacity-100 hover:bg-[#14330c] duration-500 border-none rounded-lg font-bold cursor-pointer'>Logout</button></li>
					}
				</ul>

			</div>
		</div>
	);
};

export default DashboardLayout;