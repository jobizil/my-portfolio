import React from "react";
import "./experience.css";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
const Experience = () => {
	return (
		<section id="experience">
			<h5>Skills &amp; Technologies</h5>
			<h2>My Exprience</h2>
			<div className="container exprience__container">
				<div className="exprience__frontend">
					<h3>Frontend</h3>
					<div className="exprience__content">
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>HTML</h4>
								<small className="text-light">Exprienced</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>CSS</h4>
								<small className="text-light">Exprienced</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>BURP</h4>
								<small className="text-light">Exprienced</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>React</h4>
								<small className="text-light">Exprienced</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>Vue.js</h4>
								<small className="text-light">Exprienced</small>
							</div>
						</article>
					</div>
				</div>
				{/* End of frontend */}
				<div className="exprience__backend">
					<h3>Backend Development</h3>
					<div className="exprience__content">
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>Node.js</h4>
								<small className="text-light">Exprienced</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>MongoDB</h4>
								<small className="text-light">Exprienced</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>Exprienced</h4>
								<small className="text-light">Exprienced</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>Docker</h4>
								<small className="text-light">Exprienced</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>Postgres</h4>
								<small className="text-light">Exprienced</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
