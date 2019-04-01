import styled from 'styled-components';

export const ButtonContainer = styled.button`
	background: transparent;
	border: 0.05rem solid var(--lightBlue);
	border-radius: 0.5rem;
	text-transform: capitalize;
	color: var(--lightBlue);
	padding: 0.2rem 0.5rem;
	cursor: pointer;
	font-size: 1.4rem;
	margin: 0.2rem 0.5rem 0.2rem 0;
	transition: all 0.5s ease-in-out;

	&:hover {
		background: var(--lightBlue);
		color: var(--mainBlue);
	}
	&:focus {
		outline: none;
	}
`;
