import styled from "styled-components";

export const Image = styled.img`
	width: 100%;
	max-width: 720px;
	transition: all 0.3s;
	object-fit: cover;
	border-radius: 20px;
	animation: animateThumb 0.5s;
	box-shadow: 8px 5px 6px var(--medGrey);

	:hover {
		opacity: 0.875;
        box-shadow: -8px -5px 6px var(--medGrey);

	}

	@keyframes animateThumb {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

`;
