import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";
import "./explore..css"
import slide1 from "../../assets/explore4.jpg"
import slide2 from "../../assets/explore3.jpg"
import slide3 from "../../assets/explore2.jpg"
import slide4 from "../../assets/explore6.jpg"
import Loading from "../Loading/Loading";

const ExploreSlider = () => {
	const [loading, setLoading] = useState( false )
	const [sliders, setSliders] = useState( [] );
	useEffect( () => {
		setLoading( true )
		fetch( `${ process.env.REACT_APP_HOST }/explore` )
			.then( res => res.json() )
			.then( data => {
				setSliders( data )
				setLoading( false )
			} )
	}, [] )
	if ( loading ) {
		return <Loading></Loading>
	}
	return (
		<>
			<Swiper
				slidesPerView={ 3 }
				spaceBetween={ 30 }
				pagination={ {
					clickable: true,
				} }
				navigation={ true }
				autoplay={ {
					delay: 6000,
					disableOnInteraction: false,
				} }
				modules={ [Pagination, Navigation, Autoplay] }
				className="mySwiper"
			>
				{
					sliders.map( slide => <SwiperSlide key={ slide?._id }>
						<div className="min-h-full bg-no-repeat bg-cover bg-center rounded-lg text-white px-3" style={ { backgroundImage: `url(${ slide?.url })` } }>
							<div className="flex flex-col justify-end h-[350px] ">
								<div className="text-left py-5">
									<p className="font-bold lg:text-xl">{ slide?.title }</p>
									<p className="text-[10px] text-start"> { slide?.description } </p>
								</div>
							</div>
						</div>
					</SwiperSlide> )
				}


			</Swiper>
		</>
	);
};

export default ExploreSlider;