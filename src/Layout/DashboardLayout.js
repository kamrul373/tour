import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
	return (
		<div>
			<div className="drawer drawer-mobile">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

				<div className="drawer-content flex  pl-8 py-10">
					{/* <!-- Page content here --> */ }
					<label htmlFor="my-drawer-2" className="btn bg-[#183d0d] w-full rounded-none drawer-button lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
					</label>
					<div className='flex-1'>
						<Outlet></Outlet>
					</div>

				</div>

				<div className="drawer-side bg-[#333C4D] text-white">

					<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
					<ul className="menu p-4 w-80 ">
						<li><Link to="/" className='text-2xl'>Agumentik</Link></li>
						{/* <!-- Sidebar content here --> */ }
						<li><Link to="/dashboard/banner">Banner</Link></li>

					</ul>

				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;