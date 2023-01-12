import React, { useContext } from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaFoursquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HomeContentContext } from '../../App';

const Footer = () => {
	const { social, config } = useContext( HomeContentContext )
	return (
		<div>
			<footer className="footer footer-center p-10 bg-[#0A1806]  text-white">
				<div>
					<h2 className='text-4xl font-bold'>Agumentik</h2>
				</div>
				<div>
					<div className="grid grid-flow-col gap-4">
						{
							social?.facebook &&
							<Link to={ social.facebook }>
								<FaFacebookF className='text-xl'></FaFacebookF>
							</Link>
						}

						{
							social?.pinterest &&
							<Link to={ social.pinterest }>
								<FaPinterestP className='text-xl'></FaPinterestP>
							</Link>
						}
						{
							social?.foursquare && <Link to={ social.foursquare }>
								<FaFoursquare className='text-xl'></FaFoursquare>
							</Link>
						}

						{
							social?.twitter &&
							<Link to={ social.twitter }>
								<FaTwitter className='text-xl'></FaTwitter>
							</Link>
						}
					</div>
					<div>
						<p className='py-2'>
							{ config.copyright ? config.copyright : "Copyright © 2023 - All right reserved" }
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;