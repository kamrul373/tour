import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slide2.jpg"
import slide3 from "../../assets/slide3.jpg"
import slide4 from "../../assets/slide4.jpg"
import slide5 from "../../assets/slide5.jpg"
const Slider = () => {
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
				modules={ [Navigation, Pagination, Mousewheel, Keyboard] }
				className="mySwiper"
			>
				<SwiperSlide>
					<div className="min-h-[200px] text-white px-3" style={ { backgroundImage: `url(${ slide1 })` } }>
						<div className="flex flex-col justify-end">
							<p className="">Mirissa</p>
							<p className="text-[11px] text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, expedita?</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img src={ slide2 } alt="slide"></img>
				</SwiperSlide>
				<SwiperSlide>
					<img src={ slide3 } alt="slide"></img>
				</SwiperSlide>
				<SwiperSlide>
					<img src={ slide4 } alt="slide"></img>
				</SwiperSlide>
				<SwiperSlide>
					<img src={ slide5 } alt="slide"></img>
				</SwiperSlide>

			</Swiper>
		</div>
	);
};

export default Slider;