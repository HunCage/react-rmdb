import React from "react";
import PropTypes from "prop-types";

import { Image } from "./Thumb.styles";
import { Link } from "react-router-dom";

const Thumb = ({ image, movieId, title, clickable }) => (
	<div>
		{clickable ? (
			<Link to={`/${movieId}`}>
				<Image src={image} alt={title} />
			</Link>
		) : (
			<Image src={image} alt={title} />
		)}
	</div>
);

Thumb.propTypes = {
	image: PropTypes.string,
	movieId: PropTypes.number,
	title: PropTypes.string,
	clickable: PropTypes.bool,
};

export default Thumb;
