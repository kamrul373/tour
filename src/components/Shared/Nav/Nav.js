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
			<li><Link to="/">Blogs</Link></li>
			<li><Link to="/">Interests</Link></li>
			<li>
				<span>Search <FaSearch className='text-xl'></FaSearch></span>

			</li>
		</ul>
	);
};

export default Nav;