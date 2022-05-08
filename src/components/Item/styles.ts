import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	padding: 20px;
	width: 100vw;
	height: 15vh;
`;

export const Image = styled.img`
	width: 100px;
	height: 100px;
	border: 1px solid #ccc;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: left;
	margin-left: 20px;

	p {
		display: flex;
		font-weight: bold;
		text-align: left;
	}

	.title {
		font-size: 1rem;
		width: 50vw;
	}

	.listPrice {
		font-size: 0.7rem;
		color: #ccc;
	}

	.sellingPrice {
		font-size: 0.8rem;
		color: black;
	}
`;

export const RemoveButton = styled.button`
	width: 70px;
	padding: 5px;
	border: none;
	cursor: pointer;
	margin-top: 10px;
`;
