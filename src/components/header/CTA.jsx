import React from "react";
// import CV from "../../assets/cv.pdf";

const CTA = () => {
	return (
		<div className="cta">
			<a
				className="btn"
				href="https://www.dropbox.com/s/5hjdfug50qfkk93/Job-ugbem-cv.pdf?dl=0"
				target="_blank"
				rel="noopener noreferrer">
				View CV
			</a>
			{/* <a href={CV} download>
				Preview CV
			</a> */}
			<a className="btn btn-primary" href="#contact">
				Let's Talk
			</a>
		</div>
	);
};

export default CTA;
