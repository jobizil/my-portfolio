import React from "react";
import { SiLinkedin } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { VscTwitter } from "react-icons/vsc";
const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a href="https://www.linkedin.com/in/job-ugbem" target="_blank" rel="noopener noreferrer">
				<SiLinkedin />
			</a>
			<a href="https://https://www.github.com/jobizil" target="_blank" rel="noopener noreferrer">
				<VscGithub />
			</a>
			<a href="https://www.twitter.com/jobizil" target="_blank" rel="noopener noreferrer">
				<VscTwitter />
			</a>
		</div>
	);
};

export default HeaderSocials;
