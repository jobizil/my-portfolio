import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

import emailjs from "emailjs-com";

const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("service_so25j8e", "template_u8wcg6g", form.current, "G3QPZ7w-7CJ4j7qCs");
		e.target.reset();
	};

	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Cotact Me</h2>
			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineAlternateEmail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>jobugbem57@gmail.com</h5>
						<a href="mailto:jobugbem57@gmail.com" target="_blank" rel="noreferrer">
							Send a message
						</a>
					</article>
					{/* Email */}
					<article className="contact__option">
						<RiMessengerFill className="contact__option-icon" />
						<h4>Messenger</h4>
						<h5>Jobizil</h5>
						<a href="https://m.me/jobizil" target="_blank" rel="noreferrer">
							Send a message
						</a>
					</article>
					{/* Messenger */}
					<article className="contact__option">
						<FaWhatsapp className="contact__option-icon" />
						<h4>Whatsapp</h4>
						<h5>+2348145290260</h5>
						<a href="https://web.whatsapp.com/send?phone=+2348145290260" target="_blank" rel="noreferrer">
							Send a message
						</a>
					</article>
					{/* Whatsapp */}
				</div>
				{/* End of Contact Options */}

				<form ref={form} onSubmit={sendEmail}>
					<input type="text" name="name" placeholder="A name to identify you." required />
					<input type="email" name="email" placeholder="Please enter a valid email address." required />
					<textarea name="message" rows="7" placeholder="Your message." required></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
