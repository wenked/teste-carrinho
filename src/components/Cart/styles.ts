import styled, { css } from "styled-components";

interface ContainerProps {
	isOpen: boolean;
	acima: boolean;
}

export const Container = styled.div<ContainerProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 1;
	background: white;
	${({ isOpen, acima }) =>
		isOpen
			? css`
					z-index: 99;
					display: block;
					position: absolute;
					top: 40px;
					width: 500px;
					height: 800px;
					border-radius: 20px;
					box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
					${acima
						? css`
								right: 10px;
						  `
						: css`
								right: 100px;
						  `}
			  `
			: css`
					display: none;
			  `}
`;

export const Line = styled.div`
	width: 500px;
	border-bottom: 1px solid #ccc;
`;

export const Title = styled.h1`
	display: flex;
	font-size: 1.2rem;
	font-weight: bold;
	color: black;
	justify-content: center;
	align-items: center;
	padding: 20px;
`;

export const ItemContainer = styled.div`
	display: block;
	margin: 10px;
	height: 50vh;
	overflow-y: scroll;
	overflow-x: hidden;
`;

export const Total = styled.div`
	display: flex;
	font-size: 1.2rem;
	font-weight: bold;
	color: black;
	justify-content: space-between;
	width: 100%;
	padding: 20px;
`;

export const FreteGratis = styled.div`
	display: flex;
	padding: 12px;
	border-radius: 30px;
	background-color: #7cfc00;
	margin: 0 auto 20px auto;
	justify-content: center;
	font-weight: 400;
	color: #006a4e;
	width: 300px;

	span {
		font-size: 13px;
		text-align: center;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;

export const FinishButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	width: 80%;
	height: 50px;
	background-color: #1f75fe;
	border-radius: 10px;
	color: white;
	padding: 5px;
	margin: 20px;
	font-size: 1rem;
	font-weight: 600;

	:hover {
		cursor: pointer;
	}
`;

export const CartFooter = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
`;
