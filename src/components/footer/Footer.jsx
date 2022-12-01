/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { GrFacebook } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
const Footer = () => {
	return (
		<footer id="footer">
			<a href="#" className="footer__logo">
				JOBIZIL
			</a>
			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#portfoilo">Portfolio</a>
				</li>
				<li>
					<a href="#testimonials">Testimonials</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer__socials">
				<a href="https://www.facebook.com/jobizil" target="_blank" rel="noreferrer">
					<GrFacebook />
				</a>
				<a href="https://www.twitter.com/jobizil" target="_blank" rel="noreferrer">
					<BsTwitter />
				</a>
				<a href="https://www.instagram.com/jobizil" target="_blank" rel="noreferrer">
					<FaInstagram />
				</a>
			</div>

			<div className="footer__copyright">
				<small>&copy; All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
