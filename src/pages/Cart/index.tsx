import React, { useEffect, useState } from "react";
import abaixo10reais from "../../mockdata/abaixo-10-reais.json";
import acima10reais from "../../mockdata/acima-10-reais.json";
import Item from "../../components/Item";
import {
	Container,
	Title,
	ItemContainer,
	Line,
	Total,
	FreteGratis,
	FinishButton,
	ButtonContainer,
	CartFooter,
} from "./styles";
import CurrencyFormatter from "../../utils/formatter";
import useMockApi from "../../hooks/useMockApi";

interface CartProps {
	acima: boolean;
	isOpen: boolean;
}

const Cart: React.FC<CartProps> = ({ acima, isOpen }) => {
	const [items, total] = useMockApi(acima);

	return (
		<Container isOpen={isOpen} acima={acima}>
			<Title>Meu Carrinho</Title>
			<Line />
			<ItemContainer>
				{items?.items.map((item: any, index) => (
					<Item item={item} key={index} />
				))}
			</ItemContainer>
			<CartFooter>
				<Line />

				<Total>
					<span>Total</span>
					<p>{CurrencyFormatter(total)}</p>
				</Total>
				{total > 10 && (
					<FreteGratis>
						<span>Parabéns, sua compra tem frete grátis !</span>
					</FreteGratis>
				)}
				<Line />
				<ButtonContainer>
					<FinishButton>Finalizar compra</FinishButton>
				</ButtonContainer>
			</CartFooter>
		</Container>
	);
};

export default Cart;
