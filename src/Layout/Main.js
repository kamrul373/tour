import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import Nav from '../components/Shared/Nav/Nav';
import Footer from '../components/Footer/Footer';

const Main = () => {
	return (
		<div>
			<div className="drawer">
				<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col">
					{/* <!-- Navbar --> */ }
					<div className="w-full navbar px-20 py-5 fixed top-0 right-0 left-0 z-50 text-white">
						<div className="flex-none lg:hidden">
							<label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
							</label>
						</div>
						<div className="flex-1 px-2 mx-2 font-bold">
							<Link to="/">Agumentik</Link>
						</div>
						<div className="flex-none hidden lg:block ">
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
						<li><Link to="/">Blogs</Link></li>
						<li><Link to="/">Interests</Link></li>
						<li>
							<span>Search <FaSearch className='text-xl font-semibold text-black'></FaSearch></span>

						</li>

					</ul>

				</div>
			</div>
		</div>
	);
};

export default Main;