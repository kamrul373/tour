import React, { useContext, useEffect, useState } from 'react';
import ExploreSlider from '../ExploreSlider/ExploreSlider';
import { HomeContentContext } from '../../App';
import Loading from '../Loading/Loading';

const Explore = () => {
	const { setOpen, open } = useContext( HomeContentContext )
	const [loading, setLoading] = useState( false )
	const [content, setContent] = useState( [] );
	useEffect( () => {
		setLoading( true )
		fetch( `${ process.env.REACT_APP_HOST }/explorecontent` )
			.then( res => res.json() )
			.then( data => {
				setContent( data[0] )

				setLoading( false )
			} )
	}, [] )
	if ( loading ) {
		return <Loading></Loading>
	}
	return (
		<div className='grid lg:grid-cols-5 grid-cols-1 lg:gap-16 gap-8 lg:px-20 px-8 lg:py-16 py-8 overflow-hidden'>
			<div className="left-side lg:col-span-3">
				<ExploreSlider></ExploreSlider>
			</div>
			<div className="right-side lg:col-span-2">
				<div className="content-area ">
					<h2 className='lg:text-7xl text-3xl text-[#0A1806] font-bold'>
						{ content.title }
					</h2>
					<p className='text-lg lg:text-justify pt-5 pb-8'>{ content.description }</p>
					<label htmlFor="explore" className='btn bg-[#0A1806] border-none  hover:bg-[#13300a] duration-500 px-14 mt-4 text-white' onClick={ () => setOpen( !open ) }>Subscribe</label>
				</div>
			</div>
		</div>
	);
};

export default Explore;