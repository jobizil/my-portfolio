import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
	{
		id: 1,
		title: "Portfolio Name",
		image: IMG1,
		github: "https://github.com/jobizil",
		demo: "https://github.com/jobizil",
	},
	{
		id: 2,
		title: "Portfolio Name 2",
		image: IMG2,
		github: "https://github.com/jobizil",
		demo: "https://github.com/jobizil",
	},
	{
		id: 3,
		title: "Portfolio Name 3",
		image: IMG3,
		github: "https://github.com/jobizil",
		demo: "https://github.com/jobizil",
	},
	{
		id: 4,
		title: "Portfolio Name 4",
		image: IMG4,
		github: "https://github.com/jobizil",
		demo: "https://github.com/jobizil",
	},
	{
		id: 5,
		title: "Portfolio Name 5",
		image: IMG5,
		github: "https://github.com/jobizil",
		demo: "https://github.com/jobizil",
	},
	{
		id: 6,
		title: "Portfolio Name 6",
		image: IMG6,
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
							<h3>Portfolio Name</h3>
							<div className="portfolio__item-cta">
								<a href={github} className="btn" target="_blank" rel="noreferrer">
									Github
								</a>
								<a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
									Live Project
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
