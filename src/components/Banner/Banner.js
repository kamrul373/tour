import React from 'react';
import bg from "../../assets/banner.png";
import "./banner.css";
import Slider from '../Slider/Slider';
const Banner = () => {
	return (
		<div className='banner overflow-hidden' style={ { backgroundImage: `url(${ bg })` } }>
			<div className="grid lg:grid-cols-2 grid-cols-1 gap-4 justify-center items-center lg:px-20 px-8 lg:min-h-screen">
				<div className="banner-left ">
					<div className="content-area ">
						<h2 className='lg:text-7xl text-3xl text-white font-bold'>
							Welcome to Srilanka
						</h2>
						<p className='text-white py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ab dignissimos, explicabo eveniet harum iusto quam, sequi ipsa ut tenetur expedita assumenda nobis placeat enim facere qui voluptatibus, a neque.</p>
						<button className='btn bg-[#183d0d] border-none px-14 mt-4 text-white hover:bg-[#14330c] duration-500 font-bold cursor-pointer'>Explore</button>
					</div>
				</div>
				<div className="banner-right lg:self-end lg:py-16 py-8">
					<div className="slider-area">
						<Slider></Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;