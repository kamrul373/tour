import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaFoursquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div>
			<footer className="footer footer-center p-10 bg-[#0A1806]  text-white">
				<div>
					<h2 className='text-4xl font-bold'>Agumentik</h2>
				</div>
				<div>
					<div className="grid grid-flow-col gap-4">
						<Link to="/">
							<FaFacebookF className='text-xl'></FaFacebookF>
						</Link>
						<Link to="/">
							<FaPinterestP className='text-xl'></FaPinterestP>
						</Link>
						<Link to="/">
							<FaFoursquare className='text-xl'></FaFoursquare>
						</Link>
						<Link to="/">
							<FaTwitter className='text-xl'></FaTwitter>
						</Link>
					</div>
					<div>
						<p className='py-2'>Copyright © 2023 - All right reserved</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;