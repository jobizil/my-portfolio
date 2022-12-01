import React from "react";
import "./experience.css";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
const Experience = () => {
	return (
		<section id="experience">
			<h5>Some of the tools I use</h5>
			<h2>Tools &amp; Technologies</h2>
			<div className="container exprience__container">
				<div className="exprience__backend">
					<h3>Backend Web Development</h3>
					<div className="exprience__content">
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>JavaScript</h4>
								<small className="text-light">Interpreted programming language with multi-paradigm.</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>TypeScript</h4>
								<small className="text-light">A superset of JavaScript</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>Node.js</h4>
								<small className="text-light">Used to build backend applications</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>Strapi CMS</h4>
								<small className="text-light">Built an headless CMS for a client's portfolio</small>
							</div>
						</article>

						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>MongoDB</h4>
								<small className="text-light">A typical non-relational database</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>Postgres</h4>
								<small className="text-light">A type of relational database</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>Redis</h4>
								<small className="text-light">Used for caching and session management</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>Postman</h4>
								<small className="text-light">Used for API development and testing</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>Github</h4>
								<small className="text-light">Used for version control and collaboration</small>
							</div>
						</article>
					</div>
				</div>
				{/* END OF BACKEND DEVELOPMENT */}
				<div className="exprience__frontend">
					<h3>Pentesting</h3>
					<div className="exprience__content">
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>BurpSuite</h4>
								<small className="text-light">Used for web application pentesting</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>Nmap</h4>
								<small className="text-light">Used to scan for open ports and services</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>Python</h4>
								<small className="text-light">Used for scripting and automation</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>Zenmap</h4>
								<small className="text-light">Used to scan for open ports and vulnerabilities</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>Linux</h4>
								<small className="text-light">All my pentesting activites and tools are on Kali Linux</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>Insomnia</h4>
								<small className="text-light">Used to test API's and endpoints</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>ProxyFoxy</h4>
								<small className="text-light">Used to create proxy server</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>Postman</h4>
								<small className="text-light">Used for API testing</small>
							</div>
						</article>
						<article className="exprience__details">
							<IoCheckmarkDoneCircle className="exprience__details-icon" />
							<div>
								<h4>Notion</h4>
								<small className="text-light">Used for note taking</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
