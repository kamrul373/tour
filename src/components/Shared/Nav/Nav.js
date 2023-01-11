import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
const Nav = () => {
	return (
		<ul className="menu menu-horizontal sticky top-0 z-10 font-semibold ">
			{/* <!-- Navbar menu content here --> */ }
			<li><Link to="/">Home</Link></li>
			<li><Link to="/">Discover</Link></li>
			<li><Link to="/">History</Link></li>
			<li><Link to="/">Events</Link></li>
			<li><Link to="/login" className='btn bg-accent text-white bg-opacity-75 hover:bg-opacity-100 hover:bg-accent duration-500 border-none rounded-lg font-bold'>Login</Link></li>


		</ul>
	);
};

export default Nav;