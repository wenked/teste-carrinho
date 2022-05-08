import styled from "styled-components";

export const Container = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;

export const NavItem = styled.div`
	padding: 10px;
	cursor: pointer;

	&:hover {
		background-color: #f5f5f5;
	}
`;
