import styled from "styled-components";

export const Wrapper = styled.button`
	display: block;
	background: var(--darkGrey);
	width: 25%;
	min-width: 200px;
	height: 60px;
	border-radius: 30px;
	color: var(--white);
	border: 0;
	font-size: var(--fontBig);
	margin: 20px auto;
	transition: all 0.3s;
	outline: none;
	cursor: pointer;
	box-shadow: 6px 3px 4px var(--medGrey);

	:hover {
		opacity: 0.875;
		box-shadow: -6px -3px 4px var(--medGrey);
	}
`;
