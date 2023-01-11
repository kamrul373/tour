import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";
import "./explore..css"
import slide1 from "../../assets/explore4.jpg"

const ExploreSlider = () => {
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
				<SwiperSlide>
					<div className="min-h-full bg-no-repeat bg-cover bg-center rounded-lg text-white px-3" style={ { backgroundImage: `url(${ slide1 })` } }>
						<div className="flex flex-col justify-end h-[350px] ">
							<div className="text-left py-3">
								<p className="font-bold lg:text-xl">Mirissa</p>
								<p className="text-[8px] text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
						</div>
					</div>
				</SwiperSlide>

			</Swiper>
		</>
	);
};

export default ExploreSlider;