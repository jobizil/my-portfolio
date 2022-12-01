import React from "react";
import "./portfolio.css";

const data = [
	{
		id: 1,
		title: "Bitmarte ",
		image:
			"https://res.cloudinary.com/jobizil/image/upload/v1669792843/portfolio-imgs/Screenshot_2022-11-30_at_8.19.58_AM_vp2ycy.jpg",
		github: "https://github.com/jobizil",
		demo: "https://github.com/jobizil",
	},

	{
		id: 3,
		title: "AIDMS Portal",
		image: "https://res.cloudinary.com/jobizil/image/upload/v1669794684/portfolio-imgs/Untitled.JPEG_wrza3p.png",
		github: "https://github.com/jobizil",
		demo: "https://github.com/jobizil",
	},
	{
		id: 3,
		title: "Url Shortner",
		image:
			"https://res.cloudinary.com/jobizil/image/upload/v1669930109/portfolio-imgs/Screenshot_2022-12-01_at_10.25.18_PM_afq4am.jpg",
		github: "https://github.com/jobizil",
		demo: "https://github.com/jobizil",
	},
];

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>Recent Projects</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{data.map(({ id, title, image, github, demo }) => {
					return (
						<article className="portfolio__item" key={id}>
							<div className="portfolio__item-image">
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							{/* <div className="portfolio__item-cta">
								<a href={github} className="btn" target="_blank" rel="noreferrer">
									Github
								</a>
								<a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
									Live Project
								</a>
							</div> */}
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
