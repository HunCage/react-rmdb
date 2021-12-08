import React, { useContext } from "react";
import { Link } from "react-router-dom";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";
import { Context } from "../../context";

const Header = () => {
	const [user] = useContext(Context);
	console.log(user);

	return (
		<Wrapper>
			<Content>
				<Link to="/">
					<LogoImg src={RMDBLogo} alt="react movie database logo" />
				</Link>
				{user ? (
					<span>
						Logged in as: {user.username}
					</span>
				) : (
					<Link to="/login">
						<span>Login</span>
					</Link>
				)}

				<TMDBLogoImg src={TMDBLogo} alt="the movie database logo" />
			</Content>
		</Wrapper>
	);
};

export default Header;
