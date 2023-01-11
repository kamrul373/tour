import React, { useContext } from 'react';
import ExploreSlider from '../ExploreSlider/ExploreSlider';
import { HomeContentContext } from '../../App';

const Explore = () => {
	const { setOpen, open } = useContext( HomeContentContext )
	return (
		<div className='grid lg:grid-cols-5 grid-cols-1 lg:gap-16 gap-8 lg:px-20 px-8 lg:py-16 py-8 overflow-hidden'>
			<div className="left-side col-span-3">
				<ExploreSlider></ExploreSlider>
			</div>
			<div className="right-side col-span-2">
				<div className="content-area ">
					<h2 className='lg:text-7xl text-3xl text-[#0A1806] font-bold'>
						Explore the Island
					</h2>
					<p className='text-lg lg:text-justify pt-5 pb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ab dignissimos, explicabo eveniet harum iusto quam, sequi.</p>
					<label htmlFor="explore" className='btn bg-[#0A1806] border-none  hover:bg-[#13300a] duration-500 px-14 mt-4 text-white' onClick={ () => setOpen( !open ) }>Explore</label>
				</div>
			</div>
		</div>
	);
};

export default Explore;