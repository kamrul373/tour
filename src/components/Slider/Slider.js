import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slide2.jpg"
import slide3 from "../../assets/slide3.jpg"
import slide4 from "../../assets/slide4.jpg"
import slide5 from "../../assets/slide5.jpg"
import { HomeContentContext } from "../../App";
const Slider = () => {
	const { bannerslider } = useContext( HomeContentContext )
	//const sliders = banner?.sldierImages
	return (
		<div className="overflow-hidden">
			<Swiper
				slidesPerView={ 4 }
				spaceBetween={ 20 }
				centeredSlides={ true }
				navigation={ true }
				pagination={ true }
				mousewheel={ true }
				keyboard={ true }
				breakpoints={ {
					300: {
						slidesPerView: 1,
						spaceBetween: 40,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 30,
					}

				} }
				autoplay={ {
					delay: 2000,
					disableOnInteraction: false,
				} }
				modules={ [Navigation, Pagination, Mousewheel, Keyboard, Autoplay] }
				className="mySwiper"
			>
				{
					bannerslider.map( ( slide, idx ) => <SwiperSlide key={ idx }>
						<div className="lg:min-h-[200px] lg:w-[165px] w-full h-full  text-white px-3 bg-cover bg-no-repeat border-transparent rounded-md " style={ { backgroundImage: `url(${ slide?.url })` } }>
							<div className="flex flex-col justify-end h-[200px]">
								<div className="text-left py-3">
									<p className="font-bold lg:text-xl">{ slide?.title }</p>
									<p className="text-[8px] text-start">{ slide?.description }</p>
								</div>
							</div>
						</div>
					</SwiperSlide> )
				}



			</Swiper>
		</div>
	);
};

export default Slider;