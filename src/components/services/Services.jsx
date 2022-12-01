import React from "react";
import "./services.css";
import { GiCheckMark } from "react-icons/gi";

const Services = () => {
	return (
		<section id="services">
			<h5>What I offer</h5>
			<h2>Services</h2>
			<div className="container services__container">
				<article className="service">
					<div className="service__head">
						<h3>Website Design and Development</h3>
					</div>
					<ul className="service__list">
						<li>
							<GiCheckMark className="service__list-icon" />
							<p>
								I develop and build high-end user friendly websites that provides optimum business requirements and are
								adaptive to various device.
							</p>
						</li>
						<li>
							<GiCheckMark className="service__list-icon" />
							<p>I Create reusable libraries and code for later use.</p>
						</li>
					</ul>
				</article>
				{/* END OF Web Design and Development */}
				<article className="service">
					<div className="service__head">
						<h3>Website Maintenance &amp; Management</h3>
					</div>
					<ul className="service__list">
						<li>
							<GiCheckMark className="service__list-icon" />
							<p>
								I help perform routine and scheduled maintenance on existing websites to help super-charge its web
								servers.
							</p>
						</li>
						<li>
							<GiCheckMark className="service__list-icon" />
							<p>I also help provide enhanced optimization for better user interaction and experience.</p>
						</li>
					</ul>
				</article>
				{/* END OF Website Management*/}
				<article className="service">
					<div className="service__head">
						<h3>Consultancy Services </h3>
					</div>
					<ul className="service__list">
						<li>
							<GiCheckMark className="service__list-icon" />
							<p>
								I provide enterprise grade consultancy that involves creating, maintaining and improving websites, web
								applications etc.
							</p>
						</li>
					</ul>
				</article>
				{/* END OF Content Creation */}
			</div>
		</section>
	);
};

export default Services;
