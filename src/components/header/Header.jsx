import React from "react";
import "./header.css";
import CTA from "./CTA";

import HeaderSocials from "./HeaderSocials";
const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h5>Hello I'm</h5>
				<h1>Job Ugbem</h1>
				<h5 className="text-light">Backend Developer &amp; Pentest Enthusiast</h5>
				<CTA />
				<div className="me">
					<img
						src="https://res.cloudinary.com/jobizil/image/upload/v1669895654/portfolio-imgs/profilePhoto-removebg-preview_xraane.png"
						alt="me"
					/>{" "}
				</div>
				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
				<HeaderSocials />
			</div>
		</header>
	);
};

export default Header;
