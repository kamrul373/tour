import React from 'react';
import bg from "../../assets/banner.png";
import "./banner.css";
const Banner = () => {
	return (
		<div className='min-h-screen banner' style={ { backgroundImage: `url(${ bg })` } }>
			<div className="grid lg:grid-cols-2 grid-cols-1 align-items-center px-20">
				<div className="banner-left">
					<div className="content-area py-52">
						<h2 className='lg:text-8xl text-3xl text-white font-bold'>
							Welcome to Srilanka
						</h2>
					</div>
				</div>
				<div className="banner-right">
					<div className="slider-area">

					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;