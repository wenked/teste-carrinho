import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 20vw;
	height: 35vh;
	border: 1px solid #ccc;
	margin: 20px;
`;

export const Image = styled.img`
	height: 50%;
`;

export const Title = styled.h1`
	text-align: center;
	font-size: 15px;
	font-weight: bold;
	height: 50px;
`;

export const Price = styled.h2`
	text-align: center;
	font-size: 13px;
`;

export const ButtonContainer = styled.div`
	display: flex;
	width: 100%;

	justify-content: center;
`;

export const AddCartButton = styled.button`
	width: 80%;
	height: 30px;
	border: none;
	border-radius: 5px;
	background-color: #1f75fe;
	color: white;
	cursor: pointer;
	margin: 10px;

	:hover {
		background-color: #ccc;
	}
`;
