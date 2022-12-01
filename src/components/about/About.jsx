import React from "react";
import "./about.css";
import { RiAwardLine } from "react-icons/ri";
import { RiUserStarLine } from "react-icons/ri";
import { FiCheckCircle } from "react-icons/fi";

const About = () => {
	return (
		<section id="about">
			<h5>A brief Intro</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img
							src="https://res.cloudinary.com/jobizil/image/upload/v1669898591/portfolio-imgs/photostudio-2-designify_jbfnhz.png"
							alt="about-me"
						/>
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<RiAwardLine className="about__icon" />
							<h5>Exprience</h5>
							<small>3+ Years Working Experience</small>
						</article>
						<article className="about__card">
							<RiUserStarLine className="about__icon" />
							<h5>Clients</h5>
							<small>15+ Clients</small>
						</article>
						<article className="about__card">
							<FiCheckCircle className="about__icon" />
							<h5>Projects</h5>
							<small>5+ Completed</small>
						</article>
					</div>
					<p>
						A software developer and technologist who is passionate about products that are helpful to mankind, eager to
						learn something new and apply it to daily development routine. With a keen spirit of being an enthusiastic
						team player, I'm really dedicated to grasping knowledge and also working within project specifications to
						deliver cost-effective timely results.
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
