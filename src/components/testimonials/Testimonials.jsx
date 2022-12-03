import React from "react";
import "./testimonials.css";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
	{
		avatar: "https://res.cloudinary.com/jobizil/image/upload/v1670102837/portfolio-imgs/1519904661819_cszhn6.jpg",
		name: "SpringRock Group",
		about:
			"SpringRock Group is a privately held energy company with main focus in the Oil and Gas and Power sectors of the energy domain.",
	},
	{
		avatar: "https://res.cloudinary.com/jobizil/image/upload/v1670102836/portfolio-imgs/1642428650542_udq1u1.jpg",
		name: "RusselSmith Group",
		about:
			"RusselSmith is a leading integrated energy services provider with a focus on asset integrity management, operations and production, technology solutions and engineering.",
	},
	{
		avatar: "https://res.cloudinary.com/jobizil/image/upload/v1670102836/portfolio-imgs/1613067236707_ao3o0b.jpg",
		name: "Canary Point Corporate Services ",
		about:
			"Canary Point Corporate Services Limited is a company incorporated in Nigeria to provide corporate services to clients in Nigeria and other parts of the world.",
	},
	{
		avatar: "https://res.cloudinary.com/jobizil/image/upload/v1670103178/portfolio-imgs/1519901188473_chaqsc.jpg",
		name: "NeoDocto Inc ",
		about:
			"NeoDocto is a technology based healthcare company focused on health education and digital healthcare services. NeoDocto is a complete healthcare platform that provides a wide range of healthcare services to every individual.",
	},
];
const Testimonials = () => {
	return (
		<section id="testimonials">
			<h5>Previous Clients</h5>
			<h2>Recent &amp; Past Employers</h2>
			<Swiper
				className="container testimonials__container"
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}>
				{data.map(({ avatar, name, about }, index) => {
					return (
						<SwiperSlide key={index} className="testimonial">
							<div className="client__avatar">
								<img src={avatar} alt="Avatar" />
							</div>
							<h5 className="client__name">{name}</h5>
							<small className="client__review">{about}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
