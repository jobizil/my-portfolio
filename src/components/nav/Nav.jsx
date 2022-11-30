import React from "react";
import "./nav.css";

import { CgHomeAlt } from "react-icons/cg";
import { RiUserLine } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";

import { useState } from "react";

const Nav = () => {
	const [activeNav, setActiveNav] = useState("#");
	return (
		<nav>
			<a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
				<CgHomeAlt />
			</a>
			<a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>
				<RiUserLine />
			</a>
			<a
				href="#experience"
				onClick={() => setActiveNav("#experience")}
				className={activeNav === "#experience" ? "active" : ""}>
				<BiBook />
			</a>
			<a
				href="#services"
				onClick={() => setActiveNav("#services")}
				className={activeNav === "#services" ? "active" : ""}>
				<RiServiceLine />
			</a>
			<a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}>
				<SiMinutemailer />
			</a>
		</nav>
	);
};

export default Nav;
