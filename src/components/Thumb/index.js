import React from "react";

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

export default Thumb;
