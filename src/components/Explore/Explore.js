import React from 'react';
import ExploreSlider from '../ExploreSlider/ExploreSlider';

const Explore = () => {
	return (
		<div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-16 gap-8 lg:px-20 px-8 lg:py-16 py-8 overflow-hidden'>
			<div className="left-side col-span-2">
				<ExploreSlider></ExploreSlider>
			</div>
			<div className="right-side">
				<div className="content-area ">
					<h2 className='lg:text-7xl text-3xl text-[#0A1806] font-bold'>
						Explore the Island
					</h2>
					<p className='text-lg lg:text-justify pt-5 pb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ab dignissimos, explicabo eveniet harum iusto quam, sequi.</p>
					<button className='btn bg-[#0A1806] border-none bg-opacity-75 px-14 mt-4 text-white'>Explore</button>
				</div>
			</div>
		</div>
	);
};

export default Explore;