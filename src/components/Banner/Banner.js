import React from 'react';
import bg from "../../assets/banner.png";
import "./banner.css";
import Slider from '../Slider/Slider';
const Banner = () => {
	return (
		<div className='banner' style={ { backgroundImage: `url(${ bg })` } }>
			<div className="grid lg:grid-cols-2 grid-cols-1  justify-center items-center px-20 min-h-screen">
				<div className="banner-left ">
					<div className="content-area ">
						<h2 className='lg:text-8xl text-3xl text-white font-bold'>
							Welcome to Srilanka
						</h2>
						<p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ab dignissimos, explicabo eveniet harum iusto quam, sequi ipsa ut tenetur expedita assumenda nobis placeat enim facere qui voluptatibus, a neque.</p>
						<button className='btn bg-accent border-none bg-opacity-75 px-14 mt-4 text-white'>Explore</button>
					</div>
				</div>
				<div className="banner-right self-end py-16">
					<div className="slider-area">
						<Slider></Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;