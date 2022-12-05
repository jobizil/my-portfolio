import React from "react";
import "./experience.css";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const webDevTools = [
	{
		tool: "JavaScript",
		description: "Interpreted programming language with multi-paradigm.",
	},
	{
		tool: "TypeScript",
		description: "A superset of JavaScript",
	},
	{
		tool: "Node.js",
		description: "Used to build backend applications",
	},
	{
		tool: "Strapi CMS",
		description: " Headless CMS for building customisable APIs",
	},
	{
		tool: "MongoDB",
		description: "A typical non-relational database",
	},
	{
		tool: "Postgres",
		description: "A type of relational database",
	},
	{
		tool: "Redis",
		description: "Used for caching and session management",
	},
	{
		tool: "Postman",
		description: "Used for API development and testing",
	},
	{
		tool: "Github",
		description: "Used for version control and collaboration",
	},
];
const pentestTools = [
	{
		tool: "Burp Suite",
		description: "Used for web application security testing",
	},
	{
		tool: "Nmap",
		description: "Used to scan for open ports and services",
	},
	{
		tool: "Python",
		description: "Used for scripting and automation",
	},
	{
		tool: "ProxyFoxy",
		description: "Used for proxying and intercepting traffic",
	},
	{
		tool: "Insomnia",
		description: "Used for API development and testing",
	},
	{
		tool: "Notion",
		description: "Used for note taking and documentation",
	},

	{
		tool: "Github & Git",
		description: "Used for version control and collaboration",
	},
	{
		tool: "Kali Linux",
		description: "Used for pentesting and security research",
	},
];
const Experience = () => {
	return (
		<section id="experience">
			<h5>Some of the tools I use</h5>
			<h2>Tools &amp; Technologies</h2>
			<div className="container exprience__container">
				<div className="exprience__backend">
					<h3>Backend Web Development</h3>
					<div className="exprience__content">
						{webDevTools.map(({ tool, description }, index) => {
							return (
								<article key={index} className="exprience__details">
									<div className="experience_details-icon-container">
										<IoCheckmarkDoneCircle className="experience_details-icon" />
									</div>
									<div className="experience_details-text-container">
										<h4>{tool}</h4>
										<small className="text-light">{description}</small>
									</div>
								</article>
							);
						})}
					</div>
				</div>
				{/* END OF BACKEND DEVELOPMENT */}
				<div className="exprience__frontend">
					<h3>Pentesting</h3>
					<div className="exprience__content">
						{pentestTools.map(({ tool, description }, index) => {
							return (
								<article key={index} className="exprience__details">
									<div className="experience_details-icon-container">
										<IoCheckmarkDoneCircle className="experience_details-icon" />
									</div>
									<div>
										<h4>{tool}</h4>
										<small className="text-light">{description}</small>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
